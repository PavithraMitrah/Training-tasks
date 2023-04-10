function submitFunction(){
    var text=document.getElementById("myText").value.trim().replace(/\s+/g,'');
    var textArr=text.split(",");
    var numArr=[];
    var specialChar=/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/;
    var letter=/[A-Za-z]/;
    document.getElementById("demo").style.color = "red";
    if(text==="")
    {
        document.getElementById("demo").innerHTML="Please enter a number";
    }
    else if(specialChar.test(text))
    {
        document.getElementById("demo").innerHTML="Special characters are not allowed";
    }
    else if(letter.test(text))
    {
        document.getElementById("demo").innerHTML="Letters are not allowed";
    }
    else if(textArr.length===2 && textArr[0]!="" && textArr[1]!="")
    {
        for(var i=0;i<textArr.length;i++)
        {
            numArr.push(parseInt(textArr[i]));
        }
        console.log(numArr[0],numArr[1])
        document.getElementById("demo").style.color ="green";
        document.getElementById("demo").innerHTML=findLarge(numArr[0],numArr[1]);
    }
    else
    {
        document.getElementById("demo").innerHTML="Please enter valid input";
    }
}
function findLarge(firstNum,secondNum){
    if(firstNum===secondNum)
    {
        return "Both numbers are same";
    }
    else if(firstNum>secondNum)
    {
        return "Largest: "+firstNum;
    }
    else
    {
        return "Largest: "+secondNum;
    }
} 
function resetFunction(){
    document.getElementById("myText").value='';
    document.getElementById("demo").innerHTML='';
}