function my_Dictionary()  {
    var Guitar = {
        Make: "Fender",
        Color: "Seafoam Green",
        Action: "Electric",
        MFD: "12-22-2017",
        Age: 5,
    };
    delete Guitar.Color
    document.getElementById("Dictionary").innerHTML = Guitar.Color;  // where value is removed from the dictionary before it can be processed.
}