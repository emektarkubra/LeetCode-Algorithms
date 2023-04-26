/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
    const expectedNums = [].concat(nums);
    nums.splice(0, nums.length);
    for (let i = 0; i < expectedNums.length; i++) {
        if (expectedNums[i] != val) {
            nums.push(expectedNums[i]);
        }
    }
    return nums.length;
};