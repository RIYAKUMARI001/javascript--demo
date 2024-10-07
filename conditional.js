// create a traffic light system that shows what to do based on color
let trafficlight = "red";

// check the current traffic light color and print the appropriate action(using if , elseif , else statements)
if(trafficlight === "red"){
console.log("stop");
}
 else if (trafficlight === "yellow"){
    console.log("slow down");
}
 else if (trafficlight === "green"){
    console.log("go");
}
else {
    console.log("invalid color code");
}
// create a system to calculate a popcorn price based on the size customer asked for :
let size ="M";
if(size ==="Xl"){
    console.log("XL:price is Rs.250");
}
else if(size ==="L"){
    console.log("L:price is Rs.200");
}
else if(size ==="M"){
    console.log("M:price is Rs.100");
}
else if (size ==="S"){
    console.log("S:price is Rs.50");
}
// Nested - if -else
let mark = 85;
if(mark >=40){
    console.log("pass");
    if(mark>=80){
        console.log("Excellent!");
    }
}
else {
    console.log("fail");
}


// logical  operator(&&,||,!)
let marks = 80;
if (marks >= 80 && marks <= 100){
    console.log("A+");
}
// ||(or opetaor)
//  A "good string " is a string that starts with the letter 'a' & has a length >3.  write a program to find if a string is good or not.
let goodstr = "apple";
if(goodstr[0]==="a" && goodstr.length>3){
    console.log("good string");
}
else{
    console.log("not a good string");
}
// using both or and && operator
let num = 12 ;
if (num%3 ===0 && ((num+1 === 13) || (num-1 === 11))){ 
    console.log("safe number");
}
else{
    console.log("not safe number");
}
 // switch case- used when we have some fixed values thst we need to compare to
//  break is used to exit the switch case
 let  color = "green";
 switch(color){
    case "red":
        console.log("stop");
        break;
        case "yellow":
            console.log("slow down");
            break;
            case "green":
                console.log("go");
                break;
                default:
                    console.log("invalid color code");
 }
// Pracice questions 
// Create a number variable num with some value.
//  Now, print “good” if the number is divisible by 10 and print “bad” if it is not.
let num1 = 20;
if (num1%10===0){
    console.log("good");
}
else {
    console.log("bad");
}
// Write a switch statement to print themonths in a quarter.
// Months in Quarter1:January,February,March 
// Months in Quarter2:April,May,June 
// Months in Quarter3:July,August,September 
// MonthsinQuarter4:October,November,December
// [Use the number as the case value in switch]
let month = "quarter1";
switch(month){
    case "quarter1":
        console.log("January,February,March");
        break;
        case "quarter2":
            console.log("April,May,June");
            break;
            case "quarter3":
                console.log("July,August,September");
                break;
                case "quarter4":
                    console.log("October,November,December");
                    break;
                    default:
                        console.log("invalid month");
}
// A string is a goldenstring if its starts with the character‘A’or‘a’and has a total length greater than 5.
// For a given string print if it is golden or not.

let str = "Apple";
if((str[0]==="A")||(str[0]==="a")&&(str.length>5)){
    console.log("golden string");
}
else {
    console.log ("not a golden string");
}
// write a program to check if 2 numbers have the same last digit .
// eg:32 and 47852 have the same last digit i.e.2

let  number = 32;
let number1 = 47852;
if((number%10)===(number1%10)){
    console.log("same last digit");
}
else{

    console.log("not same last digit");
}