var twoSum = function(nums, target) {
    for (let [index, number] of nums.entries()) {
        let usedFindArray = nums.slice(index + 1)
        let foundIndex = usedFindArray.findIndex(item => item + number === target)
        if (foundIndex !== -1) {
            return [index, foundIndex + index + 1]
        } else {
            continue
        }
    }
};
// testcase
console.log(twoSum([2,11,11,15,7], 9));
