import {name} from "./moduleOne"
let Ename=new name()

let employeeName={name:"pav",age:12}
console.log("User name: ",Ename.nameValidate(employeeName));

let employeeEmail={email:"pav@gmail.com"}
console.log("User email :",Ename.emailValidate(employeeEmail));

let employeePassword={password:"123@Mp321"}
console.log("User password: ",Ename.passwordValidate(employeePassword));

console.log(Ename.checkValidation(employeeName,employeeEmail,employeePassword))

