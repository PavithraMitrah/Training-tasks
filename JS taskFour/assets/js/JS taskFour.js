function submitFunction(){
    var text=document.getElementById("myText").value.trim().replace(/\s+/g,' ');
    var specialChar=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    document.getElementById("demo").style.color = "red";
    if(text==="")
    {
        document.getElementById("demo").innerHTML="Please enter a sentence";
    }
    else if(specialChar.test(text))
    {
        document.getElementById("demo").innerHTML="Special characters are not allowed";
    }
    else if(text.length===1)
    {
        document.getElementById("demo").innerHTML="Please enter more than one character";
    }
    else{ 
        var reverseStr="";
        for(var i=text.length-1;i>=0;i--)
        {
            reverseStr+=text[i];
        }
        document.getElementById("demo").style.color = "green";
        document.getElementById("demo").innerHTML="Reverse string:"+reverseStr;
    }
}
function resetFunction(){
    document.getElementById("myText").value='';
    document.getElementById("demo").innerHTML='';
}
