/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
    let xString = x.toString();

    for (let offset = 0; offset < xString.length; offset++) {
        if (xString[offset] !== xString[xString.length - (offset + 1)]) {
            return false;
        }
    }

    return true;
};
