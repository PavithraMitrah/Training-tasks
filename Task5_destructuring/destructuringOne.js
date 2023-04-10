const user = {
    data: [
        {
            name: 'kamaraj',
            age: '23',
            native: 'KVP'
        },
        {
            name: 'KumarSTR',
            age: '45',
            native: 'TVL'
        },
        {
            name: 'Inbaraj',
            age: '32',
            native: 'MDU'
        }
    ]
}
const { data } = user;
console.log(data)
// const [first, second, third] = data;
// var { name, age } = first;
// console.log(`Name:${name},Age:${age}`);
// var { name, age } = second;
// console.log(`Name:${name},Age:${age}`);
// var { name, age } = third;
// console.log(`Name:${name},Age:${age}`);
for(let {name,age} of data){
    console.log(`${name} ${age}`)
}