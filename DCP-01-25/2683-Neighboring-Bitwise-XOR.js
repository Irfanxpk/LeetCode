/**
 * @param {number[]} derived
 * @return {boolean}
 */
const doesValidArrayExist = (derived) =>
     !derived.reduce((acc, v) => acc ^ v, 0);