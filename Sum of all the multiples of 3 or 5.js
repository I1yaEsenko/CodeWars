function findSum(n) {
    let numbers = 0;
    for (let i=1; i<=n; i++){
        if (i % 3 === 0 || i % 5 === 0)  {
            numbers += i;
        }
    }
    return numbers;
}