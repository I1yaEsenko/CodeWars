function sumMul(n, m) {
    let sumMultiples = 0
    // if (m <= 0) return "INVALID"

    for (let i = 1; i < m; i++) {
        if (i % n === 0) {
            sumMultiples = sumMultiples + i
        }
    }


    //return sumMultiples
    return sumMultiples > 0 ? sumMultiples : "INVALID"

}