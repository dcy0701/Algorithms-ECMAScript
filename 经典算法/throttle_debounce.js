const debounce = (fn, wait) => {
    let context = this;
    let timer;
    const denounced = (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, wait);
    };

    return debounced;
};

// 其实还可以利用RAF

const throttle = (fn, wait) => {
    let current;
    let timer;
    let context = this;
    const throttled = (...args) => {
        let now = +new Date();
        if (!current) {
            fn.apply(context, args);
        } else if (now - current < wait) {
            return;
        } else {
            fn.apply(context, args);
            current = now;
        }
    };
};
