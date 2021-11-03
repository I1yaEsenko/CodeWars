function factorial(n)
{
    if ( n > 12 || n < 0)  throw new RangeError("Range must be between 0 and 12")
    return n>1?n*factorial(n-1):1;
    // Calculate the factorial here
}