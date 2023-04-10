const number= { one: 1, two: 2, three: 3, four: 4, five: 5 };
const restFunction=(x)=>{
    const {three,...rest}=x;
    console.log(`${rest.one},${rest.two},${rest.four},${rest.five}`);
    console.log(rest);
}
restFunction(number);