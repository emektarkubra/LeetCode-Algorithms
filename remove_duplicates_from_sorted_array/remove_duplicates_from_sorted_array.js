/**
 * @param {number[]} nums                         
 * @return {number}                              
 */

var removeDuplicates = function (nums) {
    const expectedNums = [].concat(nums);
    nums.splice(0, nums.length);
    for (let i = 0; i < expectedNums.length; i++) {
        if (!nums.includes(expectedNums[i])) {
            nums.push(expectedNums[i]);
        }
    }
    return nums.length;
};