"use strict";
/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0
 

Constraints:

-231 <= x <= 231 - 1
 */
function reverse(x) {
    const maxConstraint = Math.pow(2, 31) - 1;
    const minConstraint = Math.pow(-2, 31);
    let reversed = 0;
    let modules = 0;
    while (Math.abs(x) >= 1) {
        modules = Math.trunc(x % 10);
        reversed = reversed * 10 + modules;
        x = x / 10;
    }
    const belowMinConstraint = reversed <= minConstraint;
    const higherThanMaxConstraint = reversed >= maxConstraint;
    return (belowMinConstraint || higherThanMaxConstraint) ? 0 : reversed;
}
;
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
console.log(reverse(1534236469));
