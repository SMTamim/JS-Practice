
/**
 * Double Equal (==) :
 *      Doesn't check the type of the two operands only checks the value.
 *      it tries to convert both in same type and returns true if values are same otherwise false.
 * 
 * Triple Equal (===):
 *      Checks both type and value of thw two operands.
 *      If the both type and value are same returns true otherwise false
 * 
 *      in JS true = 1 and false = 0
 */

console.log(2 == '2');  // returns true
console.log(2 === '2'); // returns false

console.log(1 == true) // returns true
console.log(2 == true) // returns false
console.log(0 == false) // returns true
console.log(1 === true) // returns false