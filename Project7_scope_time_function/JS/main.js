x=11
function add_1() {
    document.write(21 + x + "<br>");

}
add_1();

function add_2()  {
    var y = 10;
    document.write(20 + y);
}
function add_3()  {                // Function used to show debugging via the console option
    console.log(15 + y)
}
add_2();
add_3();

function get_Date()  {
    if (new Date().getHours() < 20)  {
        document.getElementById("Hours").innerHTML = "It's not 10pm yet";     //Date-Time button 
    }
}

function Age_function()  {              // Age function for voting
    Age = document.getElementById("Age").value;
    if (Age >= 18)  {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_1() {          // Function and button to show what part of the day it is for you
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0)  {
        Reply = "It's morning time";
    }
    else if (Time >= 12 == Time < 18)  {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}