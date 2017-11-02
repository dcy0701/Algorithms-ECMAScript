var isPalindrome = function(s) {
    let str = Array.from(s).filter(char => /[0-9A-Za-z]/.test(char)).join('').toLowerCase();
    return str === Array.from(str).reduce((pre, cur) => cur + pre, '');
};


console.log(isPalindrome("A man, a plan, a canal: Panama"));
