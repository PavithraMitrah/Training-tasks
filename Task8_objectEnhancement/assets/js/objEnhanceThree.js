radioFunction = (x) => {
    const color = {
        red: false,
        blue: false,
        green: false
    }
    color[x]=true;
    let myColor = JSON.stringify(color);
    document.getElementById("result").innerHTML = `Result: ${myColor}`;
    console.log(myColor);
}