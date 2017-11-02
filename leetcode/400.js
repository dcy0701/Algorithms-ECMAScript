var findNthDigit = function(n) {
    let count = 0
    let allLength = 0

    while (true) {
        let last = allLength
        allLength += (Math.pow(10, count) - Math.pow(10, count-1)) * count
        if (n < allLength) {
            let extend = n - last
            let numWidth = count;

            let start = Math.pow(10, count - 1);
            let aimedNumber = Math.ceil(extend / numWidth) + start - 1

            let yushu = extend % numWidth;
            if (yushu == 0) {
                yushu = String(aimedNumber).length
            }
            return ~~String(aimedNumber)[yushu - 1]
            break
        } else {
            count += 1
        }
    }

};

console.log(findNthDigit(11));
