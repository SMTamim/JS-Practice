/**
 * We can easily create new variable from objects and array using
 * destructuring
 */

let object1 = {"name":"Sakib Al Hasan", "id":75, "job": "Cricketer", "origin": "Bangladesh", "contact": "0171717171"}

console.log(object1);
// In object destructuring we can destructure any property with same name in the variable
// And we can't assign variable without the property names
const {name, id, contact, job} = object1;
console.log(name, id, contact);

let array1 = [name, id, contact, job];
console.log(array1);

/**
 * In array destructuring we can't assign to a single value
 * we have to declare all variable if want to access all
 * we can only access consecutive index
 */
const [arrName, arrId, ...others] = array1;
console.log(arrName, arrId);
console.log(others);
