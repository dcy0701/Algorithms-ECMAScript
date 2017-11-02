var findPairs = function(nums, k) {
    let pairsLen = nums.reduce((pre, cur, index) => {
        let count = nums.reduce((count, num, innerIndex) => {
            if(innerIndex !== index && Math.abs(num - cur) == k) {
                    count.push(num > cur ? `${num}-${cur}`: `${cur}-${num}`)
            }
            return count
        }, [])

        return pre.concat(count)
    }, [])

    return [...new Set(pairsLen)].length
};

console.log(findPairs([3,1,4,1,5], 2));
