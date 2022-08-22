// JEST - testing f ramework for JS
function concatStrings(strA, strB) {
    return strA + strB;
}
expect(concatStrings('123','456')).toBe('123456'); // test will pass - green
expect(concatStrings(1, 2)).toBe(12); // test will fail - red
// if this happens, the code needs to be written in such a way that it'll past the test

// refactoring = updating code, without affecting the result it produces

/// TTD approach: write failing test, rewrite code to pass, optimize code without changing its results

/* types of testing:
    - e2e: slow and time consuming, testing the entire finished software product from the perspective of the end user, can be done by non-developers
    - integration testing: testing how parts of your system interact with other parts of your system
    - unit testing: testing the smallest units of your source code in isolation; fast to run & easy to write
*/

// JEST features: code coverage, mocking, snapshot testing