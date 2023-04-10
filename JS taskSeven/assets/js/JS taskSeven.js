function myFunction(x)
{
    var text=document.getElementById("inputBox").value.trim().replace(/\s+/g,'');
    text=text.replace(/,+/g,',');
    var strArr=text.split(",");
    var specialChar=/[`!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?~]/;
    var letter=/[a-zA-Z]/;
    document.getElementById("demo").style.color="red";
    if(text==="")
    {
        document.getElementById("outputBox").value='';
        document.getElementById("demo").innerHTML="Please enter a value";
    }
    else if(specialChar.test(text))
    {
        document.getElementById("outputBox").value='';
        document.getElementById("demo").innerHTML="Special characters are not allowed";
    }
    else if(letter.test(text))
    {
        document.getElementById("outputBox").value='';
        document.getElementById("demo").innerHTML="Letters are not allowed";
    }
    else if(strArr.length===1)
    {
        document.getElementById("outputBox").value='';
        document.getElementById("demo").innerHTML="Enter more than one number";
    }
    else if(strArr[0]==="" || strArr[strArr.length-1]==="")
    {
        document.getElementById("outputBox").value='';
        document.getElementById("demo").innerHTML="Please enter valid input";
    }
    else
    {
        document.getElementById("demo").innerHTML='';
        if(x==1)
        {
            if(strArr.length>1){
                var add=0;
                for(var i=0;i<strArr.length;i++)
                {
                    add+=parseFloat(strArr[i]);
                }
                document.getElementById("outputBox").value=add;
            }
        }
        else
        {
            if(strArr.length>1)
            {
                var multiply=1;
                for(var i=0;i<strArr.length;i++)
                {
                    multiply*=parseFloat(strArr[i]);
                }
                document.getElementById("outputBox").value=multiply;
            }
        }
    }
}
function resetFunction()
{
    document.getElementById("demo").innerHTML='';
    document.getElementById("inputBox").value='';
    document.getElementById("outputBox").value='';
}