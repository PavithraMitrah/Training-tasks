const student = {
    name: 'raja',
    age: 12,
    standard: 7,
    sports: 'football',
    rank: 8,
};
const keys = ['name', 'age', 'standard', 'rank'];
for (let x of keys){
    console.log(`${x}:${student[x]}`)
}
