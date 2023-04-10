function submitFunction(){
    var text=document.getElementById("myText").value.trim().replace(/\s+/g,'');
    var specialChar=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var num=/[0-9]/;
    document.getElementById("demo").style.color = "red";
    if(text==="")
    {
        document.getElementById("demo").innerHTML="Please enter a sentence";
    }
    else if(specialChar.test(text))
    {
        document.getElementById("demo").innerHTML="Special characters are not allowed";
    }
    else if(num.test(text))
    {
        document.getElementById("demo").innerHTML="Numbers are not allowed";
    }
    else if(text.length===1)
    {
        document.getElementById("demo").innerHTML="Please enter more than one character";
    }
    else if(text[0].toLowerCase()===text[text.length - 1].toLowerCase())
    {
        document.getElementById("demo").style.color = "green";
        document.getElementById("demo").innerHTML="Both the characters are same";
    }
    else{
        document.getElementById("demo").innerHTML="Both the characters are not same";
    }

}
function resetFunction(){
    document.getElementById("myText").value='';
    document.getElementById("demo").innerHTML='';
}
