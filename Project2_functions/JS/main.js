function My_First_Function() {  // This is the first function
    var str = "This is the button text!";
    document.getElementById("Button_Text").innerHTML = str;
}

function myFunction() {     // This is the second function for concatenating two strings
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}

function myFunction1(p1, p2) {
  return p1 * p2;
}
document.write(myFunction1(4, 3));





