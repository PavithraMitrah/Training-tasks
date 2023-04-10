const integer:number = 6;
const float:number= 6.66;
const hex:number= 0xf00d;
const binary:number= 0b1010011010;
const octal:number= 0o744;
const negZero:number= -0;
const actuallyNumber:number= NaN;
const largestNumber:number= Number.MAX_VALUE;
const mostBiglyNumber:number= Infinity;
console.log("Integer :",integer);
console.log("Float :",float);
console.log("Hex :",hex);
console.log("Binary :",binary);
console.log("Octal :",octal);
console.log("Neg zero :",negZero);
console.log("Actually number :",actuallyNumber);
console.log("Largest number :",largestNumber);
console.log("Most bigly number :",mostBiglyNumber);



console.log("--------------------");
function testFunction(a:string):string{
    return a
}
console.log("String :" ,testFunction("xxxx"))

console.log("--------------------");
const anyFunction=(x:any):any=>{
    return x
}
console.log("Any :",anyFunction(10))
console.log("Any :",anyFunction("xxx"))

console.log("--------------------");
const myFunction=(a:(string | boolean)):(string | boolean)=>{
    return a
}
console.log("String or Boolean :" ,myFunction("Pavithraaaaaaa"));
console.log("String or Boolean :" ,myFunction(true));

console.log("-----------------------");
interface userOne{
    name:string
}
interface userTwo{
    age:number
}
type person=userOne & userTwo;
var employeeDetail : person={
    name:"mk",
    age:21
}
console.log("Employee : ",employeeDetail);
