function my_Dictionary()  {
    var Guitar = {
        Make: "Fender",
        Color: "Seafoam Green",
        Action: "Electric",
        MFD: "12-22-2017",
        Age: 5,
    };
    document.getElementById("Dictionary").innerHTML = Guitar.Color;
}