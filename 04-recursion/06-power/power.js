function power(number, expo) {
    
    // base case
    if (expo == 0) return 1

    // recursive base
    const result = number * power(number, --expo)
    // unwind
    return result;
}

module.exports = power;

/**
 * factorial power stack visualize
 * 
 * power(2,4) = 2 * power(2, 3)
 * power(2,3) = 2 * power(2, 2)
 * power(2,2) = 2 * power(2, 1)
 * power(2,1) = 2 * power(2, 0)
 * power(2,0) = return 1 (base case)
 * 
 * unwinding stack (skip base case)
 * *** <> is previous unwinding value
 * 
 * power(2,1) = 2 * power(2, 0) --> 2 * 1 = 2
 * power(2,2) = 2 * power(2, 1) --> 2 * 2 = 4
 * power(2,3) = 2 * power(2, 2) --> 2 * 4 = 8
 * power(2,4) = 2 * power(2, 3) --> 2 * 8 = 16
 *
 */