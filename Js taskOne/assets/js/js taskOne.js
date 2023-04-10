function submitFunction(){
    //i have a pen in my pocket with letters
    var text=document.getElementById("myText").value.trim().replace(/\s+/g,' ');
    console.log('text', text);
    var specialChar=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const str = text.split(" ");
    document.getElementById("demo").style.color = "red";
    if(text==="")
    {
        document.getElementById("demo").innerHTML="Please enter a sentence";
    }
    else if(specialChar.test(text))
    {
        document.getElementById("demo").innerHTML="Special characters are not allowed";
    }
    else if(str.length===1)
    {
        document.getElementById("demo").innerHTML="Please enter a sentence which has more than one word";
    }
    else
    {
        var min=str[0];
        var max=str[0];
        for(let i=1;i<str.length;i++)
        {
            if(min.length>str[i].length)
            {
                min=str[i];
            }
            else if(str[i].length>max.length)
            {
                max=str[i];
            }
        }
        if(min.length===max.length){
                document.getElementById("demo").innerHTML="All words are equal in length";
            }
            else{
                document.getElementById("demo").style.color = "green";
                document.getElementById("demo").innerHTML="Smallest:" +min +" && "+ "Largest:"+max;
            }
    }
}
function resetFunction(){
    document.getElementById("myText").value='';
    document.getElementById("demo").innerHTML='';
}