/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let result =  [...nums.slice(k), ...nums.slice(0, k)];
    result.forEach((v,index) => (nums[index] = v));
};
