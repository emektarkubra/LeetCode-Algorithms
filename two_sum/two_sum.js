/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length - 1; j++) {
            if (target == nums[i] + nums[j]) {
                return [i, j];
            };
        }
    }
}