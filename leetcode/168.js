var convertToTitle = function(n) {
    n = n - 1;
    let result = '';
    while (true) {
        let mod = n % 26;
        result = String.fromCharCode(mod + 65) + result;

        n = Math.floor(n / 26) - 1;
        if (n === -1) {
            return result;
        }
    }

};
console.log(convertToTitle(27));
