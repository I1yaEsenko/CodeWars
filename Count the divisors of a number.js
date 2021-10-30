function getDivisorsCnt(n){
    // todo
    let numbers = 0;
    for (let i = n; i >0; i--){
        if (n % i === 0) numbers++;
    }
    return numbers;
}