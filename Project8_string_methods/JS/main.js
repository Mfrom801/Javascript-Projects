function full_sentence()  {
    var p1 = "I would ";
    var p2 = "like to ";
    var p3 = "have a cabin in the ";
    var p4 = "woods!";
    var whole_sentence = p1.concat(p2, p3, p4);
    document.getElementById("String").innerHTML = whole_sentence;
}

function slice1()  {
    var sentence = "All work and no play makes Johnny a hungry boy";
    var section = sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = section
}

function upper() {
          
    var str = 'Lets see if this works.';
      
    var string = str.toUpperCase();
    document.getElementById("Uppercase").innerHTML = string;
}

function search()  {
    let text = "Mr. Pink didn't make it.";
    let position = text.search("Pink");
    document.getElementById("Search").innerHTML = position;
}
  

function string_M()  {
    var x = 197;
    document.getElementById("Num_to_str").innerHTML = x.toString();
}


function precision_M()  {
    var x = 12939.12568695;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

function fixed1()  {
  let num = 5.65924;
  let n = num.toFixed();
  document.getElementById("Fixed").innerHTML = n;  
}

function value1()  {
    let text = "Woah man!";
    let result = text;
    document.getElementById("Valueof").innerHTML = result;


}