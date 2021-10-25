//Growth of a Population
function nbYear(p0, percent, aug, p) {
    let currentPop = p0;
    let years = 0;
    while (currentPop < p) {
        years++;
        currentPop = currentPop + (currentPop * (percent / 100) + aug);
    }
    return years;
}

//Test

describe("nbYear",function() {
    it("Basic tests",function() {
        Test.assertEquals(nbYear(1500, 5, 100, 5000), 15);
        Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
        Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94);
    })})