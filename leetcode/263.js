/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num < 1) {
        return false
    }
    while (num % 2 === 0) {
        num = num / 2
    }

    while (num % 3 === 0) {
        num = num / 3
    }

    while (num % 5 === 0) {
        num = num / 3
    }

    return num === 1;
};
