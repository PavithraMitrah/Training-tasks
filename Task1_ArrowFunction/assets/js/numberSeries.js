myFunction = () => {
    var start = Number(document.getElementById("startNumber").value);
    var end = Number(document.getElementById("endNumber").value);
    var interval = Number(document.getElementById("interval").value);
    var list = [];
    if (start >= end) {
        document.getElementById("demo").innerHTML = "Please enter a start value lessthan end value"
    }
    else {
        while (start <= end) {
            list.push(start);
            start += interval;
        }
        console.log(list.toString())
        document.getElementById("demo").innerHTML = "Number series: " + list;
    }
}
resetFunction = () => {
    document.getElementById("startNumber").value = "";
    document.getElementById("endNumber").value = "";
    document.getElementById("interval").value = "";
    document.getElementById("demo").innerHTML = "";
}