//
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
