/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function (haystack, needle) {
    if (haystack.includes(needle)) {
        let k = haystack.search(needle);
        return k;
    }
    return -1;
}