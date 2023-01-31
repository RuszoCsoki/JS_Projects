function concat_Function()
{
    var text1 = "I made ";
    var text2 = "this ";
    var text3 ="complate sentese ";
    var text4 = "with JS concatenation."
    document.getElementById("Concat").innerHTML = text1.concat(text2,text3,text4);
}

function cut_it_Up()
{
    var Sentence = "This is the full sentence that will be sliced. Watch!";
    var Section = Sentence.slice(15, 36);

    document.getElementById("Mysentence").innerHTML = Sentence;
 
    document.getElementById("Portion").innerHTML = Section;
}

function uppercase_Function(){
    var upperText = "This text is all uppercase now";
    document.getElementById("UpperCase").innerHTML = upperText.toUpperCase();
}

function lowercase_Fucntion(){
    var lowerText = "UPPERCASE";
    document.getElementById("lowercase").innerHTML = lowerText.toLowerCase();
}

function search_Function()
{
    var source = "The pink panter is sitting on the pick sofa";
    let position = source.search("pink");
    document.getElementById("find").innerHTML = position;
}

function string_Function()
{
    var x = 222;
    document.getElementById("stirngMethod").innerHTML = x.toString();
}
function precision_Function()
{
    var y = 1098765243568765432;
    document.getElementById("precisionMethod").innerHTML = y.toPrecision(8);
}