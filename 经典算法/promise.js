let noop = () => {};

class Promise {
    constructor (fn) {
        this.next = [];
        this.status = 'pending';

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
        };

        let runNextReject = function (err)  {
            this.next.forEach(promise => {
                let handle = promise.errorHandle || noop;
                let result;

                try {
                    result = handle(err);
                } catch (e) {
                    reject.call(promise, e);
                }

                if (!result || !result.then) {
                    resolve.call(promise, result);
                }
            });
        };

        let resolve = function (data) {
            if (this.status !== 'pending') {
                return;
            }
            this.status = 'fullfilled';
            this.resMsg = data;
            runNextResolve.call(this, data);
        };

        let reject = function (err) {
            if (this.status !== 'pending') {
                return;
            }
            this.status = 'rejected';
            this.errMsg = err;

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
        return p;
    }

    static all () {

    }

    static race () {

    }

    static reject () {
        return new Promise((resolve, reject) => {
            reject()
        })
    }

    static resolve () {
        return new Promise((resolve, reject) => {
            resolve()
        })
    }
}
// test
Promise.resolve().then(console.log(123)).then(console.log(234))
