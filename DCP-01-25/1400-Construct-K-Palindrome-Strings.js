/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    // If the string length is less than k, it's impossible to form k palindromic strings
    if (s.length < k) {
        return false;
    }

    // Frequency map for character counts
    const freq = new Array(26).fill(0);

    // Count the frequency of each character
    for (let char of s) {
        freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Count characters with odd frequencies
    let oddCount = 0;
    for (let count of freq) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }

    // If odd frequencies are <= k, it's possible to form k palindromic strings
    return oddCount <= k;
};