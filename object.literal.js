// Object literal-used to store Keyed collection and complex entities
const student = {
    name:"riya",
    age:19,
    city:"Delhi"
}
console.log(student);
// for get values
console.log(student.name);
// or
console.log(student["name"]);
// js automatically convert object keys to strings
const obj ={
    1:"a",
    2:"b",
    3:"c",
    true: "d",
}
console.log(obj);

// add new key-value pair
student.country="India";
console.log(student);
// or we can also add different data types
student.marks=[90,95,87,88];
console.log(student);

// update value
student.name="Riya kumari";
console.log(student);
// delete key-value pair
delete student.city;
console.log(student);

// Object of object-storing information of multiple students
const classInfo ={
    aman: {
        grade:"A",
        city:"Delhi",
    
},
    ghanshyam: {
        grade:"B",
        city:"Mumbai",
    }
    
    
}
console.log(classInfo);
console.log(classInfo.aman.grade)
// Array of objects-storing information of multiple students
const students =[
    {
        name:"Amar",
        age:18,
        city:"Delhi",
    },
    {
        name:"Ghanshyam",
        age:19,
        city:"Mumbai",
    }
]

console.log(students);