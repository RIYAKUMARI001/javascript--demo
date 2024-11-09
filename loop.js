// for loop - (initialization; condition;updation){
// do something
// }
// Questions
// print all odd numbers (1 to 15)
// for (let i=1;i<=15;i=i+2){
//     console.log(i);
// }
// for backwards
for (let i=15;i>=1;i=i-2){
    console.log(i);
}
// print all even numbers (1 to 15)
for (let i=2;i<=15;i=i+2){
    console.log(i);
}
// infinite loops
// for(let i=1;i>=0;i++) output will be infinity(1,2,3,4,5----)
// for(leti=1;i<=5;i--) output will be infinity(1,0,-1,-2,----)
// for(let i=1; ; i++)in this case also output will be infinity because we didn't define the condition step so code will execute infinite times.

// Print the multiplication table for 5
for(let i=5; i<=50;i=i+5){
    console.log(i);
}

// Nested for loop
for(let i=1;i<=2;i++){
    console.log(`outer loop :${i}`);
    for(let j=1;j<=3;j++){ 
        console.log(j);
    }
}
// while loop
// {
    // do something
// }
let i=1;
while(i<=5){
    console.log(i);
    i++;
}
// break keyword
let j=1;
while(j<=18)
{
    if (j==10){
        break;
    }
console.log(j);
j++;
}

// loop with arrays
let fruits = ["mango","banana","apple","orange"];
fruits.push("pineapple")
for (let i=0;i<fruits.length;i++){
    console.log(i,fruits[i])
}
// reverse method
for(let i=fruits.length-1; i>=0;i--){
    console.log(i);
}

// NESTED loops with Nested Arrays
let heroes = [["superman","batman","thor"],["ironman","wonder woman","flash"]];
for (let i=0;i<heroes.length;i++){
    console.log(`list of ${i} ,${heroes[i]},${heroes[i].length}`);
    for (let j=0;j<heroes[i].length;j++){
        console.log(`j=${j},${heroes[i][j]}`);
    }
}
// }for of loop
// syntax-for(element of collections){
// do something 
// }
let students =["Amar","Ghanshyam","Rohan","Balram"]
for(info of students){
    console.log(info);
}
// foor printing individual chracters
for (char of "RiyaKumari"){
    console.log(char);
}
// Nested for of loop
let book = [["Atomic Habits","Rich Dad Poor Dad","Think and Grow Rich"],["pshycology","sociology","philosophy"]];
for (list of book){
    for(name of list){
    console.log(name);
    }
}

