const removeFunction=()=>{
    var list=document.getElementById("listValues").value.trim().replace(/\s+/g,'').replace(/,+/g,',');
    var listElements=list.split(",");
    var position=document.getElementById("position").value;
    var removePosition=Number(position);
    var specialChar=/[`!@#$%^&*()_+\-=\[\]{};'.,:"\\|<>\/?~]/;
    var alphabets=/[a-zA-Z]/;
    if(list=="" || position==""){
        document.getElementById("successMsg").innerHTML="Please fill the input field";
    }
    else if(listElements[0]===""||listElements[listElements.length-1]===""){
        document.getElementById("successMsg").innerHTML="Please enter a valid input";
    }
    else if(removePosition===0){
        document.getElementById("successMsg").innerHTML="Position must start with 1";
    }
    else if(specialChar.test(position)){
        document.getElementById("successMsg").innerHTML="Special characters are not allowed in the position field";
    }
    else if(alphabets.test(position)){
        document.getElementById("successMsg").innerHTML="Alphabets are not allowed in the position field";
    }
    else if(removePosition>listElements.length || removePosition<=0){
        document.getElementById("successMsg").innerHTML=`Please enter a position between 1 to ${listElements.length}`;
    }
    else{
        var removeElement=listElements.splice(removePosition-1,1);
        document.getElementById("successMsg").innerHTML=`Successfully removed the ${removeElement} element from ${position-1} index value`;
    }
}
const resetFunction=()=>{
    document.getElementById("listValues").value="";
    document.getElementById("position").value="";
    document.getElementById("successMsg").innerHTML="";
}