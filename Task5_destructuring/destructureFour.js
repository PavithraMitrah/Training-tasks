const user = [
    { firstName: 'suresh' },
    'lname',
    23,
    {
        cityCode: 'KVP',
        location: {
            doorNumber: '1236',
            streetName: 'gandhi gram'
        }
    },
    'tamilnadu',
    'india',
    '628502'
]; 
const [fname,lname,number,address,state,country,pincode]=user;
const {firstName}=fname;
const {location}=address;
const {doorNumber,streetName}=location;
console.log(`First Name:${firstName}`);
console.log(`Door no:${doorNumber}`);
console.log(`Street:${streetName}`);
console.log(`Pincode:${pincode}`);