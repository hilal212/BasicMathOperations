function getNumber(id) {
    return parseInt(document.getElementById(id).value); 
}

function add() {
    var elem = document.getElementById("results");
    elem.value = getNumber('number1') + getNumber('number2'); 
}

function subtract() {
    var elem = document.getElementById("results");
    elem.value = getNumber('number1') - getNumber('number2');  
}

function multiply() {
    var elem = document.getElementById("results");
    elem.value = getNumber('number1') * getNumber('number2'); 
}

function divide() {
    var elem = document.getElementById("results");
    elem.value = getNumber('number1') / getNumber('number2'); 
}

