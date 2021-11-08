var uniqueInOrder=function(iterable){
    let array = Array.isArray(iterable) ? iterable : iterable.split('');
    const uniqeArr = array.filter((letter, i) =>{
        return array[i] != array[i+1];
    })
    return uniqeArr;
}