const arr = [0, 3, 5 , 2, 8, 10, 9]

// Map is used to perform operations on array elements
// Map with one statement arrow function
console.log(arr.map(x => x*x));

// Map with multiple statements arrow function
let result = arr.map((x)=>{
    x = x*2
    return x+1;
});

console.log(result)

// Implementation of map using anonymous function
result = arr.map(function(x){
    x = x*2
    return x+0;
});
console.log(result);

// Implementation of map using function
function cube(x){
    return x*x*x;
}

result = arr.map(x=>cube(x));
console.log(result);

// Implementation of filter

// Implementation of map using arrow functions
console.log(arr.filter(x => x > 5 ));

result = arr.filter((x) => {
    return x < 5;
})
console.log(result);

// Implementation of filter using anonymous function
result = arr.filter(function(x){
    return x%2==0;
})
console.log(result);

// Implementation of map using function
function checkOddNumber(x){
    return x%2 != 0;
}

result = arr.filter(x => checkOddNumber(x));
console.log(result);