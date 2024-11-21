/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
let twoSum = function(nums, target) {
    let remainder;
    let remainderIndex;
    for (let i = 0; i < nums.length; i++) {
        remainder = target - nums[i];
        remainderIndex = nums.indexOf(remainder);
        if (remainderIndex !== -1 && remainderIndex !== i) {
            return [i, remainderIndex];
        }
    }
};
