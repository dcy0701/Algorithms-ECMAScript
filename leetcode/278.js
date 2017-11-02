function isBadVersion (k) {
    if (k >= 47 ) {
        return true;
    }
}

var solution = function(isBadVersion) {
    return function(n) {
        let left = 0, right = n;
        while (true) {
            let mid = parseInt((left + right + 1) / 2);
            let bool = isBadVersion(mid);

            if (bool) {
                if (mid - left === 1) {
                    return mid;
                }
                right = mid;
            } else {
                if (right - mid === 1) {
                    return right;
                }
                left = mid;
            }
        }
    };
};

console.log(solution(isBadVersion)(1000));
