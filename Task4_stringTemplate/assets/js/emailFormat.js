emailFunction=()=>{
    var user=document.getElementById("user").value;
    var recordId=document.getElementById("recordId").value;
    var id=Number(recordId);
    var status=document.getElementById("status");
    var from=document.getElementById("from").value;
    var to=document.getElementById("to").value;
    var cc=document.getElementById("cc").value;
    var comments=document.getElementById("comments").value;
    var specialChar=/[`!@#$%^&*()_+\-=\[\]{};'.:"\\|<>\/?~]/;
    var regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var numberreg=/[1-9][0-9]*|0/;
    var testnumber=numberreg.test(id);
    if(user===""){
        document.getElementById("error").innerHTML="Please enter a user";
    }
    else if(recordId===""){
        document.getElementById("error").innerHTML="Please enter a record ID";
    }
    else if(id===0){
        document.getElementById("error").innerHTML="Please enter a valid record id";
    }
    else if(specialChar.test(recordId)){
        document.getElementById("error").innerHTML="Special characters are not allowed in the record id";
    }
    else if(testnumber==true){
        if(regex.test(from) && regex.test(to) && regex.test(cc)){
            document.getElementById("hideDiv").style.display="none";
            document.getElementById("showDiv").style.display="block";
            document.getElementById("notification").innerHTML="<b>This is an automatically generated notification to inform you about the following</b>";
            document.getElementById("greeting").innerHTML="Greetings";
            document.getElementById("showUser").innerHTML=`User : <b>${user}</b> changed status of <b>${id}</b> to <b>${status.checked}</b> with below comments.`;
            document.getElementById("showFrom").innerHTML=`From : <b>${from}</b>`;
            document.getElementById("showTo").innerHTML=`To : <b>${to}</b>`;
            document.getElementById("showCc").innerHTML=`Cc : <b>${cc}</b>`;
            document.getElementById("showComment").innerHTML=`Comments : <b>${comments}</b>`;
            document.getElementById("regards").innerHTML="Best Regards";
            document.getElementById("companyName").innerHTML="mitrah soft";
        }
        else{
            document.getElementById("error").innerHTML="Please enter a valid email";
        }
    }
    else{
        document.getElementById("error").innerHTML="Alphabets are not allowed in the record id ";
    }
}
resetFunction=()=>{
    document.getElementById("user").value="";
    document.getElementById("recordId").value="";
    document.getElementById("status").checked=false;
    document.getElementById("from").value="";
    document.getElementById("to").value="";
    document.getElementById("cc").value="";
    document.getElementById("comments").value="";
    document.getElementById("error").innerHTML="";
}