/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
    let symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    let num = 0;
    for (let i = 0; i < s.length; i++) {

        let current = symbols[s.charAt(i)];
        let next = symbols[s.charAt(i + 1)];

        if (current < next) {
            num -= current;
        } else {
            num += current;
        }
    }
    return num;
};