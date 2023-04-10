/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
    let string = "";
    outloop: for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] != strs[j][i]) {
                break outloop;
            }
        }
        string += strs[0][i];
    }
    return string;
};