// write a javascript function that returns array elements larger than a number
// let array = [8,9,10,1,2,3,4,5,6,7];
// let number = 5;
// function getLargerThan(array, number) {
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]>number){
//             return array[i];
//         }
//         }
//     }
//     console.log(getLargerThan(array, number)); // Output: 6
let arr=[8,9,10,1,2,3,4,5,6,7];
let num=5;
//elements larger than a number num
function getElements(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]); 
        }
    }
}
console.log(getElements(arr,num));

//  Write a javascript function to extract unique characters from a string
let str = "abccccdefghijklmnopqrstuvwxyz";
function getUniqueCharacters(str){
    let uniquechars = new Set();
    for(let char of str)
{
    uniquechars.add(char);
}
return Array.from(uniquechars).join('')
}
console.log(getUniqueCharacters(str));
// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output
let country = ["India", "USA", "UK", "Australia"];

function longestCountry(arr){
    let longestCountry ="";
    for(let arr of country){
        if(arr.length > longestCountry.length){
            longestCountry = arr;
        }
    } 
    return longestCountry;
}

console.log(longestCountry(country));

  