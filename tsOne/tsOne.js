var integer = 6;
var float = 6.66;
var hex = 0xf00d;
var binary = 666;
var octal = 484;
var negZero = -0;
var actuallyNumber = NaN;
var largestNumber = Number.MAX_VALUE;
var mostBiglyNumber = Infinity;
console.log("Integer :", integer);
console.log("Float :", float);
console.log("Hex :", hex);
console.log("Binary :", binary);
console.log("Octal :", octal);
console.log("Neg zero :", negZero);
console.log("Actually number :", actuallyNumber);
console.log("Largest number :", largestNumber);
console.log("Most bigly number :", mostBiglyNumber);
console.log("--------------------");
function testFunction(a) {
    return a;
}
console.log("String :", testFunction("xxxx"));
console.log("--------------------");
var anyFunction = function (x) {
    return x;
};
console.log("Any :", anyFunction(10));
console.log("Any :", anyFunction("xxx"));
console.log("--------------------");
var myFunction = function (a) {
    return a;
};
console.log("String or Boolean :", myFunction("Pavithraaaaaaa"));
console.log("String or Boolean :", myFunction(true));
console.log("-----------------------");
var employeeDetail = {
    name: "mk",
    age: 21
};
console.log("Employee : ", employeeDetail);
