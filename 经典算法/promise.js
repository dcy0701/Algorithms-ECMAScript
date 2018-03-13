let noop = () => {};



class Promise {
    constructor (fn) {
        this.next = [];
        this.status = 'pending';

        this.result = '';

        let runNextResolve = function (data) {
            this.next.forEach(promise => {
                let handle = promise.handle || noop;
                let result;

                try {
                    result = handle(data);
                } catch (e) {
                    reject.call(promise, e);
                }

                if (!result || !result.then) {
                    resolve.call(promise, result);
                }
            });

            this.next = [];
        };

        this._innerRunNextResolve = runNextResolve;

        let runNextReject = function (err)  {
            this.next.forEach(promise => {
                let handle = promise.errorHandle;
                let result;

                // 错误向后冒泡
                if (handle) {
                    try {
                        result = handle(err);
                    } catch (e) {
                        return reject.call(promise, e);
                    }
                } else {
                    return reject.call(promise, err);
                }

                if (!result || !result.then) {
                    resolve.call(promise, result);
                }
            });

            this.next = [];
        };

        this._innerRunNextReject = runNextReject;

        let resolve = function (data) {
            if (this.status !== 'pending') {
                return;
            }
            this.status = 'fulfilled';
            this.result = data;
            runNextResolve.call(this, data);
        };

        let reject = function (err) {
            if (this.status !== 'pending') {
                return;
            }
            this.status = 'rejected';
            this.result = err;

            runNextReject.call(this, err);
        };

        try {
            fn(resolve.bind(this), reject.bind(this));
        } catch (err) {
            reject(err);
        }
    }

    then (handle, errorHandle) {
        let p = new this.constructor(noop);

        handle && (p.handle = handle);
        errorHandle && (p.errorHandle = errorHandle);

        this.next.push(p);

        if (this.status === 'fulfilled') {
            setTimeout(() => {
                this._innerRunNextResolve.call(this, this.result);
            });
        } else if (this.status === 'rejected') {
            setTimeout(() => {
                this._innerRunNextReject.call(this, this.result);
            });
        }

        return p;
    }

    catch (errorHandle) {
        let p = new this.constructor(noop);
        errorHandle && (p.errorHandle = errorHandle);

        this.next.push(p);
        return p;
    }

    static all () {
        // 加个计数器，每次成功+1
    }

    static race () {
        // 成功返回一个promise.resolve
    }

    static reject (reason) {
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }

    static resolve (data) {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }
}
// test


let test = Promise.resolve().then(() => console.log('test'));

test.then(() => console.log(123))
