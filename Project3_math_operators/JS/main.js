function addition_Function()  {
    var addition = 9 + 5;
    document.getElementById("Math").innerHTML = "9 + 5 =" + addition;
}

function sub_Function()  {
    var Subtraction = 9 - 7;
    document.getElementById("Math").innerHTML = "9 - 7 = " + Subtraction;
}

function multiplication() {
    var simple_math = 9 * 5;
    document.getElementById("Math").innerHTML = "9 x 5 = " + simple_math;
}

function division()  {
    var simple_math1 = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_math1;
}

function more_math()  {
    var simple_math2 = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 + 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math2;
}

function modulus_operator()  {
    var simple_math3 = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math3;
}

function negation_operator()  {
    var x = 15;
    document.getElementById("Math").innerHTML = -x;
}
var z = "<br>";

function increase()  {
var x = 5;
x++;
document.getElementById("Math").innerHTML = "When you increase 5 by one you get " + x;
}


function decrease()  {
var y = 5.25;
y--;
document.getElementById("Math").innerHTML = "5.25 decreased by 1 is " + y;
}
function Square_root()  {
    var value1 = Math.SQRT2;
    document.getElementById("Math").innerHTML = "The square root of 2 is " + value1;
}

window.alert(Math.random() * 100);





