var uniqueInOrder=function(iterable){
    const array = iterable.split('');
    const uniqeArr = array.filter((letter, i) =>{
        return array[i] != array[i+1];
    })
    return uniqeArr;
}