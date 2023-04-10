const employee = {
	name: 'ajay',
	age: 26,
	designation: 'software engineer',
	email: 'sr@gmail.com'
};
const employeeDetail={
    ...employee,
	email:'sr@mitrahsoft.com'
}

console.log(employeeDetail);