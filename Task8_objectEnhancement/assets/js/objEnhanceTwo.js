const country = {
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan"
}
update=()=>{
    var selectField=document.getElementById("language").value;
    document.getElementById("demo").innerHTML=`Country:${country[selectField]}`;
}