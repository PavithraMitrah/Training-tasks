function submitFunction(){
    var text=document.getElementById("myText").value.trim();
    var specialChar=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var vowels=/[aeiouAEIOU]/;
    var num=/[0-9]/;
    document.getElementById("demo").style.color = "red";
    if(text=="")
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
    else if(text.length>1)
    {
        document.getElementById("demo").innerHTML="Please enter only one word";
    }
    else{
        if(vowels.test(text))
        {
            document.getElementById("demo").style.color = "green";
            document.getElementById("demo").innerHTML="Entered character is vowel";
        }
        else
        {
            document.getElementById("demo").innerHTML="Entered character is not a vowel";
        }
    }
}
function resetFunction(){
document.getElementById("myText").value='';
document.getElementById("demo").innerHTML='';
}