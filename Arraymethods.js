// for each
let arr = [1, 2, 3, 4, 5];
let print = function (element) {
    console.log(element);
};
arr.forEach(print);
// map & filter
let num = [1, 2, 3, 4, 5];
let double = num.map(function (element) {
    return element * 2;
});
console.log(double);

// filter-based on condition give a new array if the condition is true it will be included otherwise it will be excluded
let even = num.filter(function (element) {
    return element % 2 == 0;
});
console.log(even);
// Every  method - return true if every element of array gives true for some functions. Else returns false.(similar to and operator)
let allEven = num.every(function (element) {
    return element % 2 == 0;
});
console.log(allEven);

// Some method - return true if any element of array gives true for some functions. Else returns false.(similar to or operator)
let anyEven = num.some(function (element) {
    return element % 2 == 0;
})
console.log(anyEven);
// reduce method- it reduces the array to a single value. 
let sum = num.reduce(function (acc, element) {
    return acc + element;
}, 0);
console.log(sum);
// finding the maximum number in an array
let max = num.reduce(function (acc, element) {
    return Math.max(acc, element);
}, 0);
console.log(max);
// check i all numbers in our array are multiple of 10 or not
let arr1 = [10, 20, 30, 40, 50];
let check = arr1.every(function (element) { 
    return element % 10 == 0;
});
console.log(check);

// default parameter- giving a default value to the arg
function sum1(a, b = 1) {
    return a + b;
}
console.log(sum1(10));

