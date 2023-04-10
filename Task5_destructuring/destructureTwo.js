const user = {
    data: [
        {
            name: 'Ajay',
            personal: {
                age: '25',
                native: 'nellai',
                education: {
                    rank: '2',
                    grade: 'B'
                },
                interest: {
                    hobby: 'book reading'
                }
            }
        },
        {
            name: 'vicky',
            personal: {
                age: '26',
                native: 'chennai',
                education: {
                    rank: '3',
                    grade: 'D'
                },
                interest: {
                    hobby: 'playing'
                }
            }
        },
        {
            name: 'muthu',
            personal: {
                age: '35',
                native: 'madurai',
                education: {
                    rank: '5',
                    grade: 'F'
                },
                interest: {
                    hobby: 'writing'
                }
            }
        }
    ]
};
const {data}=user;
const[first,second,third]=data;
var {personal}=first;
var {education}=personal;
var {rank,grade}=education;
console.log(`Rank:${rank},Grade:${grade}`);

var {personal}=second;
var {education}=personal;
var {rank,grade}=education;
console.log(`Rank:${rank},Grade:${grade}`);

var {personal}=third;
var {education}=personal;
var {rank,grade}=education;
console.log(`Rank:${rank},Grade:${grade}`);