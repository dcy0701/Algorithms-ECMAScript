var removeDuplicates = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] = false;
        }
    }

    let j = 0

    while (true) {
        if (nums[j] === undefined) {
            break
        }

        if (nums[j] === false) {
            nums.splice(j, 1)
            j--
        }

        j++
    }

    return nums.length
};

console.log(removeDuplicates([1,1,2,2,4,5,6,9,9,9]));
