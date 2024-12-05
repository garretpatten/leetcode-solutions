const conversionMap = new Map([
    [ 'I', 1 ],
    [ 'V', 5 ],
    [ 'X', 10 ],
    [ 'L', 50 ],
    [ 'C', 100 ],
    [ 'D', 500 ],
    [ 'M', 1000 ]
]);

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const numeral = s.split('');

    if (numeral.length < 1) {
        return 0;
    }

    let acc = 0;
    let current;
    let last = conversionMap.get(numeral[0]);
    let total = 0;
    for (let i = 1; i < numeral.length; i++) {
        current = conversionMap.get(numeral[i]);
        // If a lower number is hit, no subtraction is needed.
        // Add the accumulated amount to the total.
        if (current < last) {
            total += acc;
            acc = 0;
        // If a higher number is hit, subtraction is needed.
        // Subtract the accumulated amount from the total.
        } else if (current > last) {
            total -= acc;
            acc = 0;
        // If the current is the same as the last, subtraction
        // may or may not be needed. Add to accumulator.
        } else {
            acc += current;
        }
    }

    return total;
};
