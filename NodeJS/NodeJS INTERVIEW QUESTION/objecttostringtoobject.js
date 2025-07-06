

let student ={
    sname:"usama",
    class :"btech",
    Branch :"electrical",
    age : 21,
    mobileno : 6388086156
}
console.log(student);
let str= JSON.stringify(student)
console.log(str)
console.log(str.sname);
   
let str2=JSON.parse(student)
console.log(str2);
console.log(str2.sname);