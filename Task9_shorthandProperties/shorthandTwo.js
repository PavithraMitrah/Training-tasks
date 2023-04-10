var name = 'babu';
var age = '24';
var education = { college: 'UTI', degree: 'BE', class: 'first class', location: 'cbe' };
const user={education,name,age}
console.log(user);

var {education}=user;
var{college,class:std_class}=education;
var detail={college,std_class,name};
console.log(detail)