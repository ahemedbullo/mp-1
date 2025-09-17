let one = document.getElementById("one");

let two = document.getElementById("two");

let output = document.getElementById("output")

function addition() {
    let result = (Number(one.value) + Number(two.value));
    output.innerHTML = String(result);
    outputStyle(result);
}

function subtraction() {
    let result = (Number(one.value) - Number(two.value));
    output.innerHTML = String(result);
    outputStyle(result);
}

function multiplication() {
    let result = Number(one.value) * Number(two.value);
    output.innerHTML = String(result);
    outputStyle(result);
}

function division() {
    let result = (Number(one.value) / Number(two.value));
    output.innerHTML =String(result);
    outputStyle(result);
}

function power(){
let base = Number(one.value);
let power = Number(two.value);
let result = 1;

    if( power >= 0){
        for (let i = 0; i < power; i++) {
            result = result * base;
        }
    }
    else {
        let pos = 1;
        for (let i = 0; i < Math.abs(power); i++) {
            pos = pos * base;
        }
        result = 1 / pos;

    }

output.innerHTML = result.toString();
    outputStyle(result);
}
function outputStyle(result) {
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "#2f4f2f";
    }
}
function clearCalc() {
    one.value = "";
    two.value = "";
    output.innerHTML = "";
    output.style.color = "#2f4f2f";
}