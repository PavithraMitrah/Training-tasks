function myFunction()
{
    var text=document.getElementById("inputOne").value.trim().replace(/\s+/g,'').replace(/,+/g,',');
    var textArr=text.split(",");
    var specialChar=/[`!@#$%^&*()_+\-=\[\]{};'.:"\\|<>\/?~]/;
    var decimal=/[.]/;
    var position=document.getElementById("inputTwo").value;
    var number=Number(position);
    var replaceChar=document.getElementById("inputThree").value;
    document.getElementById("demo").style.color="red";
    if(position!="" && replaceChar!="") {
        if(text=="") {
            document.getElementById("demo").innerHTML="Please enter a sentence";
        }
        else if(specialChar.test(text)){
            document.getElementById("demo").innerHTML="Special characters are not allowed";
        }
        else if(textArr.length===1){
            document.getElementById("demo").innerHTML="Single string is not allowed";
        }
        else if(textArr[0]===""||textArr[textArr.length-1]==""){
            document.getElementById("demo").innerHTML="Please enter a valid input";
        }
        else if(number<0){
            document.getElementById("demo").innerHTML="positive number only allowed";
        }
        else if(number===0){
            document.getElementById("demo").innerHTML="Position must start with 1";
        }
        else if(decimal.test(number)){
            document.getElementById("demo").innerHTML="Decimal value not allowed";
        }
        else if(number>textArr.length){
            document.getElementById("demo").innerHTML="Enter position between 1 to "+textArr.length ;
        }
        else if(replaceChar===""){
            document.getElementById("demo").innerHTML="Please fill the replace character";
        }
        else{
            textArr[number-1]=replaceChar;
            document.getElementById("demo").style.color="green";
            document.getElementById("demo").innerHTML="After replace: " +textArr;
        } 
    }
    else
    {
        document.getElementById("demo").innerHTML="Please fill the input";
    }
}
function resetFunction()
{
    document.getElementById("inputOne").value="";
    document.getElementById("inputTwo").value="";
    document.getElementById("inputThree").value="";
    document.getElementById("demo").innerHTML="";
}