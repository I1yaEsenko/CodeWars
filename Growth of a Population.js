//Growth of a Population

function nbYear(p0, percent, aug, p) {
    // your code
    let n = 0;
    for (n; p0 <= p; n++ )
        p0 = p0 * (1 + percent / 100 ) + aug;
    return n;

}

//Test

describe("nbYear",function() {
    it("Basic tests",function() {
        Test.assertEquals(nbYear(1500, 5, 100, 5000), 15);
        Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
        Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94);
    })})