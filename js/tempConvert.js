function toCelsius(f) {
    //console.log ("testF")
    return (5/9) * (f-32);
}

console.log(toCelsius(32));
console.log(toCelsius(100));
console.log(toCelsius(-40));


function toFarenheit(c) {
    //console.log ("testC")
    return (c-32)/1.8;
}

console.log(toFarenheit(3));
console.log(toFarenheit(50));
console.log(toFarenheit(-40));
