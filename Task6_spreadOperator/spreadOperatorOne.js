const arr=[1,2,3,4,5];
spreadFunction=(a,b,c,d,e)=>{
    return a+b+c+d+e;
}
var sum=spreadFunction(...arr);
console.log(`Sum:${sum}`);