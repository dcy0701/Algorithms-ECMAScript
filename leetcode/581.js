var findUnsortedSubarray = function(nums) {
    let left = 0, right = nums.length - 1;
    let aimedLeft = false, aimedRight = false;
    while (true) {
        if (![aimedLeft, aimedRight].includes(false)) {
            break;
        }

        if (aimedRight === false) {
            let max = Math.max(...nums.slice(left, right + 1));

            if (nums[right] >= max) {
                right = right - 1;
            } else {
                aimedRight = right;
            }
        }

        if (aimedLeft === false) {
            let min = Math.min(...nums.slice(left, right + 1));

            if (nums[left] <= min) {
                left = left + 1;
            } else {
                aimedLeft = left;
            }
        }

        if (left > right) {
            break;
        }
    }


    if ([aimedLeft, aimedRight].includes(false)) {
        return 0
    }

    return aimedRight - aimedLeft + 1
};
console.log(findUnsortedSubarray([1,2,3,4]));
