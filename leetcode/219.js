var containsNearbyDuplicate = function(nums, k) {
    for (let [index,num] of nums.entries()) {
        // 找到此数字最左边的一个
        let leftIndex = nums.lastIndexOf(num, index - nums.length - 1);
        // 找到此数字最右边的一个
        let rightIndex = nums.indexOf(num, index + 1);

        console.log(num, leftIndex, rightIndex);
        if(index - leftIndex <= k && leftIndex !== -1) {
            return true;
        }

        if(rightIndex - index <= k && rightIndex !== -1) {
            return true;
        }
    }
    return false;
};

console.log(containsNearbyDuplicate([-1,-1], 1));
