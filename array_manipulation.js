let arrOfString = ["pagol", "chagol", "han", "tan", "shiyaler", "thang"]
let arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let arrOfSymbols = ['!', "@", "#", "$", '%', '^', '&', '*', '(', ')'];

/**
 * To check if a variable is Array we can use the Array.isArray() method
 */
console.log("Array.isArray([1, 2, 3])",Array.isArray([1, 2, 3]));
console.log('Array.isArray("text")', Array.isArray("text"));

/* Accessing array elements */
// We can access array element using its index number
// From 0 to it's length-1
// the .lenth variable contains the total number of elements in the array
for(let i=0; i<arrOfNumbers.length; i++) 
    console.log(arrOfNumbers[i]);

/**
 * The entries() method creates a key value pair from an array
 */
let dict = arrOfString.entries();
for(let x of dict) console.log('t', x[0]);

/**
 * The keys() method can be used to create an iterator object of an array
 * same as accessing index but without the length properties in loop
 */
let keys = arrOfSymbols.keys();
for(let symbol of keys) console.log(arrOfSymbols[symbol]);

/**
 * The copyWithin() method copies an item of an array to another
 * position of the array
 */
let arr336 = ["Aam", "Jaam", 'Kaathal', "Kola"]
console.log(arr336);
arr336.copyWithin(0, 2);
console.log(arr336);

/* Copy an array to another variable */
let arr2 = [...arrOfString]
console.log(arr2);

/*  Merging or adding multiple arrays */
arr2 = arr2.concat(arrOfNumbers, arrOfSymbols)
console.log(arr2);

/* Merging with spread (...) operator*/
arr2 = [...arrOfString, ...arrOfNumbers, ...arrOfSymbols];

/* Converting an array to string */
let index = arr2.toString();
console.log(index);
    /* 
    * We can also use join() function to convert an array to string
    * It can also change the separator of each element of the array
    */ 
index = arr2.join(' ')
console.log(index);

/**
 * Remove an element from an array
 */
console.log("\nUnmodified Array:", arrOfNumbers);
console.log("Removed first Item: ",arrOfNumbers.shift()); // Removes the first element and returns it
console.log("Removed last Item: ", arrOfNumbers.pop()); // Removes the last element and returns it
console.log("\nAfter removing using shift() and pop(): ",arrOfNumbers);



/**
 *  Adding element to an array
 */
console.log("\nOriginal Array before adding any elements:", arrOfNumbers);
arrOfNumbers.unshift(111, 333, 336); // Adds the element to the beginning 
arrOfNumbers.push(297, 302, 317) // Adds the element to to end
console.log('After adding elements using unshift() and push():', arrOfNumbers);


/**
 * slice() method takes index number to remove element
 * it doesn't remove element from actual array it creates
 * new array without the removed elements
 */
let sliced_array = arrOfSymbols.slice(1)
console.log("\nOriginal array", arrOfSymbols);
console.log("sliced array", sliced_array);
/**
 * But when you provide two index it creates an array with given indexes
 */
sliced_array = arrOfSymbols.slice(2, 5);
console.log("Original Array", arrOfSymbols);
console.log("sliced_array from index 2 to 5 of original array\n", sliced_array);


/**
 * splice() method is used to add an item to a certain position of an array
 * as well as we can use it to remove elements from an array
 */

console.log("Original Array: ", arrOfString);
/** adding to elements at 0th position the array arrOfString */
arrOfString.splice(0, 0, 'ganjakhor', 'herokhor')
/** first 0 refers to the position where to insert 
 *  2nd 0 refers how many elements to be removed from the position
 *  rest are the elements to be added from index of 1st parameter
*/
console.log("\nOriginal Array after modification:\n",arrOfString);

/**
 * removing elements using splice
 */

arrOfString.splice(0, 3);
console.log("Array after removing elements\n",arrOfString);

/**
 * Add element to certain position using splice()
 */
arrOfString.splice(4, 0, "New Item1", "New Item3");
console.log(arrOfString);

/**
 * The sort() method sorts an array to ascending order
 * Though it doesn't works well for numbers. To make it work
 * for numbers or to sort descending order we will have to pass a compare function
 */
arrOfNumbers.sort()
console.log("Incorrect Sort",arrOfNumbers);
arrOfNumbers.sort((a, b)=> a-b); // to get descending order we pass b-a
console.log("Correct Sort",arrOfNumbers);

/**
 * The reverse() method changes the order of an array
 */
let arr71 = [1,2,3,4,5].reverse()
console.log("Reversed Array ", arr71);

/**
 * The Array.prototype.{methodName} property can be used to
 * create a user-defined method to perform on the array 
 */

/**
 * To know about map filter and find check other file in this repo
 */

Array.prototype.reduceOne = function(){
    for(let i=0; i<this.length; i++)this[i] = this[i]-1;
};
arr71.reduceOne();
console.log(arr71);


