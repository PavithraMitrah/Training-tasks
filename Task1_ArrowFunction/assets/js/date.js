var d=new Date();
var date=d.getDate();
var month=d.getMonth()+1;
var year=d.getFullYear();
var hour=(d.getHours()<=12)?d.getHours():d.getHours()-12;
var amOrpm=(d.getHours()<12)?"AM":"PM";
var minutes=d.getMinutes();
dateFunction=()=>console.log(`${date}-${month}-${year} ${hour}:${minutes} ${amOrpm}`);