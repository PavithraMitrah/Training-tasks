const user = {
    Name: 'kumar',
    age: 25,
    address: 2317,
    city: 'kovilpatti',
    personalInfo: [{ nickName: 'GK', email: 'kumar@mitrahsoft.com', phone: 123456 }]
};
const resetFunction=(x)=>{
    const {personalInfo,...rest}=x;
    const [first]=personalInfo;
    const {nickName,email}=first;
    console.log(`Nick name:${nickName}`);
    console.log(`Email:${email}`);
}
resetFunction(user);