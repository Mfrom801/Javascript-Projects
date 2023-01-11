function Call_Loop()  {
    var Digit = "";
    var x = 1;
    while (x < 29) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
function Script1()  {
let text = "Hello Everyone!";
let length = text.length;

document.getElementById("Script").innerHTML = length;
}

 var VGames = ["Doom", "Hitman", "BeatSaber", "MarioKart", "Zelda", "Overcooked"];
    var Content = "";
    var Y;
    function for_loop() {
        for (Y = 0; Y < VGames.length; Y++)  {
            Content += VGames[Y] + "<br>";
        }
        document.getElementById("List_of_games").innerHTML = Content;
    }

    function array_function()  {
        var dog_pic = [];
        dog_pic[0] = "barking";
        dog_pic[1] = "howling";
        dog_pic[2] = "sneezing";
        dog_pic[3] = "sleeping";
        document.getElementById("Array").innerHTML = "In this picture, the dog is " +
            dog_pic[2] + ".";

    }

    function constant_function()  {
        const Vehicles = {type:"truck", brand:"Toyota", color:"green"};
        Vehicles.color = "Red";
        Vehicles.price = "$25,000";
        Vehicles.year = "2005";
        document.getElementById("Constant").innerHTML = "The cost of the " +
        Vehicles.type + " was " + Vehicles.price + " for the " + Vehicles.year + " version.";
    }

    function let_function()  {
        var z = 99;
        document.write(z);
        {
            let z = 65;
            document.write("<br>" + z);
        }
        document.write("<br>" + z);

    }
   

    function Car1()  {
    let car = {
    make: "Toyota ",
    model: "Tacoma ",
    year: "1994 ",
    color: "Black ",
    description : function()  {
        return "The truck is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
    }



    


    