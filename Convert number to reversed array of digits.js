function digitize(n) {
    //code here
    n = String(n).split('').reverse().map(Number);

    return n;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.deepEqual(digitize(35231),[1,3,2,5,3]);
    });
});