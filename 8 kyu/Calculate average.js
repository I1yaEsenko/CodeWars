function findAverage(array) {
    // your code here
    let sumOfArray = 0
    for (let i=0; i < array.length; i++) {
        sumOfArray += array[i]

    }

    return array.length === 0 ? 0 : sumOfArray / array.length
//return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}