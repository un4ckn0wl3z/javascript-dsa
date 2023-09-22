function factorial(num) {

    // base case
    if( num > 0  && num < 2) return 1
    // recursive case
    const fac = num * factorial(--num)
    // unwind
    return fac
}

module.exports = factorial;


/**
 * factorial function stack visualize
 * 
 * factorial(5) = 5 * factorial(4)
 * factorial(4) = 4 * factorial(3)
 * factorial(3) = 3 * factorial(2)
 * factorial(2) = 2 * factorial(1)
 * factorial(1) = return 1 (base case)
 * 
 * unwinding stack (skip base case)
 * *** <> is previous unwinding value
 * 
 * factorial(2) = 2 * factorial(1) --> 2 * 1 = <2>
 *                                           /
 * factorial(3) = 3 * factorial(2) --> 3 * <2> = <6>
 *                                             /
 * factorial(4) = 4 * factorial(3) --> 4 * <6> = <24>
 *                                              /
 * factorial(5) = 5 * factorial(4) --> 5 * <24> = 120
 */