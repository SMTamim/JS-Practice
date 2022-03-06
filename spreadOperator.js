// Spread Operator or ... operator are used to spread an array or copy an array

arr0 = [19, 20, 30, 40]
arr1 = [5, 3, 1, 2, 0]
arr2 = [6, 7, 8, 9];

// Complex
arr3 = arr1.concat(arr2).concat([10, 11, 12]).concat(arr0) ;
console.log(arr3);
// Same thing simpler using ...
arr3 = [...arr1, ...arr2, 10, 11, 12, ...arr0]
console.log(arr3);

// copying array
array1 = arr0 // It copies the reference of arr0 to array1 not a new copy 
console.log("array1: ", array1); 
array1[0] = 50;
console.log('arr0: ',arr0); // changes in array1 also changes arr0

// using the spread operator solves this
array1 = [...arr0]
array1[0] = 40;
console.log("array1: ", array1, "\narr0: ", arr0);