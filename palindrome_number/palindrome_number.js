/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
    x = x.toString();
    let a = x.length;
    for (let i = 0; i < a; i++) {
        if (x.charAt(i) != x.charAt(a - 1)) {
            return false;
        }
        a--
    }
    return true;
};