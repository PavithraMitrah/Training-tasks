interface userDetail{
    name:string,
    age:number
}
interface userDetail{
    id:number
}
var user:userDetail[]=[
    {name:"pav",age:1,id:2},{name:"mk",age:21,id:1}
]
console.log("Array : ",user)


type x={
    name:string
}
// type x={
//     age:number
// }
var xValue : x={name:"pav"}
console.log("x : ",xValue)