const user={
    data: [
        {
            gender: 'Male',
            requestSource: 'Student',
            requestStatus: 'Pending',
            requestData: {
                educationInfo: [
                    {
                        userEmail: 'Doaulas@rrigg.com',
                        qualification: 'College'
                    }
                ],
                personalInfo: [
                    {
                        userFirstName: 'Doaul',
                        userLastName: 'Doaulas',
                        designation: 'Developer',
                        location: {
                            doorNumber: '2323',
                            streetName: 'indra nager',
                            city: 'kovilaptti'
                        }
                    }
                ]
            }
        },
        {
            gender: 'Female',
            requestSource: 'Student',
            requestStatus: 'Success',
            requestData: {
                educationInfo: [
                    {
                        userEmail: 'pooja@rrigg.com',
                        qualification: 'College'
                    }
                ],
                personalInfo: [
                    {
                        userFirstName: 'pooja',
                        userLastName: 'kekar',
                        designation: 'Tester',
                        location: {
                            doorNumber: '1236',
                            streetName: 'gandhi gram',
                            city: 'rajasthan'
                        }
                    }
                ]
            }
        }
    ]
}
const {data}=user;
const [first,second]=data;
var {requestData}=first;
var {personalInfo}=requestData;
var [firstData]=personalInfo;
var{location:addressOne}=firstData;
var {streetName:street,city:cityName}=addressOne;

var {requestData}=second;
var {personalInfo}=requestData;
var [firstData]=personalInfo;
var{location:addressTwo}=firstData;
var {streetName,city}=addressTwo;
console.log(`streetName:${street},${streetName}`);
console.log(`City:${cityName},${city}`);