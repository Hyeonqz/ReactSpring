var a=3;
let b=4;

if(true) {
    var a=5;
    let b=6;
    console.log(a); //5
    console.log(b); //6
}

console.log(a); //5
console.log(b); //4
