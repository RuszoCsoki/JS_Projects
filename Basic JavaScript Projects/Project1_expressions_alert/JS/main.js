alert("Hello World ");
document.write("I told my daughter, \"You do not go out with that boy!!\" <br> \"I hate you dad!\" She responded <br>");
document.write("It is often the small steps, " 
+"not the giant leaps, " +" that bring about the most lasting change."+ " \"Queen Elisabeth II.\" <br>");

var Country ="Canada", City="Toronto", Street="Yonge St", Numer="321";
document.write(Country);
document.write(City, "<br>");

document.write(5+5, "<br>"); //will show the sum of the two munbers plus a line break
function My_First_Function(){ 
    var str = "This is the button text."; // inisalizes a string variable
    document.getElementById("Button_Text").innerHTML=str; //call an element by ID, and show the string on the element
}