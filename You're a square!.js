var isSquare = function(n){

    perfectSquare = Math.sqrt(n);
    if (perfectSquare * perfectSquare === n && Number.isInteger(perfectSquare)) {
        return true;
    } else {
        return false;
    }
};
