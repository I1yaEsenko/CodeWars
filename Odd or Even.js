function oddOrEven(array) {
    //enter code here
    let result = array.reduce(function (a,b){
        return a+b;
    },0);
    return (result % 2 == 0) ? 'even' : 'odd';
}