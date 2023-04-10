interface user{
    name:string,
    add:Object
}
var employee :user={
    name:"pav",
    add:{native:"svg"}
}
console.log("Employee details :" ,employee);

console.log("--------------------");
type sample={
    name:string,
    age:number
}
var person :sample={
    name:"pav",
    age:21
}
console.log("Person :" ,person);

console.log("--------------------");
interface sampleOne{
    name:string
}
interface sampleTwo{
    job:string
}
interface sampleThree{
    age:number
}
type employee=sampleOne | sampleTwo
var userOne :employee={
    name:"pav"
}
console.log("Employee1 :" ,userOne);
var userTwo : sampleOne & (sampleTwo & sampleThree)={
    name:"pav",
    job:"developer",
    age:21
}
console.log("Employee2 :" ,userTwo);