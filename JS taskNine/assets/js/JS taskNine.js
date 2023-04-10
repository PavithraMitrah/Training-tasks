function dateFunction ()
{
    const d=new Date();
    var amOrPm = (d.getHours() < 12) ? "AM" : "PM";
    var hour = (d.getHours() <= 12) ? d.getHours() : d.getHours() - 12;
    document.getElementById("showYear").value=d.getFullYear();
    document.getElementById("showMonth").value=d.getMonth()+1;
    document.getElementById("showDate").value=d.getDate();
    document.getElementById("showHours").value=d.getHours();
    document.getElementById("showMinutes").value=d.getMinutes();
    document.getElementById("showSeconds").value=d.getSeconds();
    document.getElementById("showMilliseconds").value=d.getMilliseconds();
    document.getElementById("showLocaltime").innerHTML=d.getDate() + ' / ' + d.getMonth()+1 + ' / ' + d.getFullYear() + ' ' + hour + ':' + d.getMinutes() + ' ' + amOrPm;
    document.getElementById("showUtc").innerHTML=d.toUTCString();
    document.getElementById("showUtcmilli").innerHTML=d.getTime();
}
function resetFunction()
{
    document.getElementById("showYear").value="";
    document.getElementById("showMonth").value="";
    document.getElementById("showDate").value="";
    document.getElementById("showHours").value="";
    document.getElementById("showMinutes").value="";
    document.getElementById("showSeconds").value="";
    document.getElementById("showMilliseconds").value="";
    document.getElementById("showLocaltime").innerHTML="";
    document.getElementById("showUtc").innerHTML="";
    document.getElementById("showUtcmilli").innerHTML="";
}