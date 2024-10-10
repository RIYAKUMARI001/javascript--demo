// truthy & falsy
// Everything in JS is true or false(in boolean context)
// this doesn't mean their value itself is false or true , but they are as false or true if taken in boolean context.
// Falsy values
// false, 0,-0,NaN,"",undefined,null,on(BigInt)
// Truthy values-everything else
if (""){
    console.log("it has a true value");
}
else {
    console.log("it has falsy value")
}


let num =0;
// here else will  print because num value is 0 and it  is falsy value that's why it print else part
if (num){
    console.log("num is not equal to 0");
}
else {
    console.log("num is  equal to 0");
}



// STRING METHODS
// Methods- actions that can be performed on objects.
// string are immutable in JS 



// str.trim()-  trims whitespaces from both ends of string & returns a new one . (but not from the middle (eg-he  llo))
let string = "   hello   ";
console.log(string.trim());

// str.toUpperCase()-converts a string to upper case
console.log(string.toUpperCase());

// str.toLowerCase()-converts a string to lower case
console.log(string.toLowerCase());

// string methods with arguments- Format-stringname.method(arg)
// str.indexOf(arg)- returns the index of the first occurence of the arg in the string. or give -1 if not found.
let str ="ILOVECODING";
console.log(str.indexOf("CODING"));

// Methhod chaining- using one method after another.
let msg = "   hello   "
let newMsg = msg.trim();
console.log("after trim:",newMsg);
newMsg = newMsg.toUpperCase();
console.log("after uppercase:",newMsg);
//       or
let newMsg2 = msg.trim().toUpperCase();
console.log("after both:",newMsg2);


//  slice method- returns a part of the original string as a new string.
let name =  "RiyaKumari";
let newName = name.slice(4,9);
console.log(newName);


// replace method- searches a value in the string & returns a new string with the  value replaced.
let name1 = "I love coding";
let newName1 = name1.replace("coding","programming");
console.log(newName1);


// repeat method - returns a string with the number of copies of  a string.
console.log(newName1.repeat(2));
