/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const n = A.length;
    const map = new Map ();
    const commonPrefixes = Array(n);
    let prev = 0;

    for (let i = 0; i < n; i++) {
        const a = A[i];
        const b = B[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) + 1);

        let curr = map.get(a) >= 2 ? 1 : 0;

        if (a !== b) {
            curr += map.get(b) >= 2 ? 1 : 0;
        }

        commonPrefixes[i] = prev + curr;
        prev += curr;
    }

    return commonPrefixes;
};