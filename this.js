// this in javascript
// this keyword is used to access the current object in javascript
const students = {
    name:"riya",
    eng:95,
    math:83,
    sci:99,
    getAvg(){
        let sum = this.eng + this.math + this.sci;
        console.log(`Average marks of ${this.name} is ${sum/3}`);
    }
}

// try and catch
// try- this statement allows you to define a block of code to be tested for errors while it is being executed.
// catch- this statement specifies a block of code to be executed if an error occurs in the try block.
console.log("Before try-catch block");
try{
    console.log(a);
}
catch{
    console.log("An error occurred");
}
console.log("After try-catch block");
// set timeout-inbuilt function in javascript that calls a function or evaluates an expression after a specified number of milliseconds.
console.log("Hello before setTimeout");
setTimeout(function(){
    console.log("Hello from setTimeout");
}, 4000);
console.log("Hello after setTimeout");
// set interval- this function calls a function or evaluates an expression at fixed time intervals (in milliseconds).
let intervalId = setInterval(function(){
    console.log("Hello from setInterval");
}, 2000);   
clearInterval(intervalId);
 // clearInterval function is used to stop the setInterval() function.
 
