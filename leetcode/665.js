var checkPossibility = function(nums) {

    let flag = true;
    for (let [index, item] of nums.entries()) {
        let leftItem = nums[index - 1];
        let rightItem = nums[index + 1];
        let right2Item = nums[index + 2];

        if (item <= rightItem) {
            continue;
        }

        if (item > rightItem && flag == false) {
            return false;
        }

        if (item > rightItem) {
            flag = false;
        }


        if ([right2Item, rightItem, leftItem].includes(undefined)) {
            continue;
        }

        if ((right2Item >= leftItem && right2Item >= item) || (rightItem >= leftItem) || (rightItem < leftItem && right2Item >= item)) {
            flag = false;
        } else {
            return false;
        }
    }

    return true;
};

console.log(checkPossibility([3,4,2,3]));
