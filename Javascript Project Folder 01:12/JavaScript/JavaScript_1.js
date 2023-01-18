function Animal_1()  {
    var Animal_Output;
    var Animals = document.getElementById("Animal_input").value;
    var Animal_string = " is an amazing creature!";
    switch(Animals) {
        case "Hedgehog":
            Animal_Output = "Hedgehog" + Animal_string;
            break;

            case "Lizard":
            Animal_Output = "Lizard" + Animal_string;
            break;

            case "Snake":
            Animal_Output = "Snake" + Animal_string;
            break;

            case "Shark":
            Animal_Output = "Shark" + Animal_string;
            break;

            case "Lion":
            Animal_Output = "Lion" + Animal_string;
            break;

            case "Starfish":
            Animal_Output = "Starfish" + Animal_string;
            break;
            default:
                Animal_Output = "Please select an animal exactly as written on the above list";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}

function Hello1() {
    var x = document.getElementsByClassName("Click me!");
    x[0].innerHTML ="The text has gone wonky!";
}

var canvas = document.getElementById("ID_name");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("I'm the Man in the BOX", 40, 90);
