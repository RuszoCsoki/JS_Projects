function Greeting(){
  if(new Date().getHours() < 12){
    document.getElementById("greeting").innerHTML = "Good morning!";
  }
  if ((new Date().getHours() > 12) && (new Date().getHours() < 20))
  {
    document.getElementById("greeting").innerHTML ="Good afternoon!";
  }
  else
  {
    document.getElementById("greeting").innerHTML= "Good night!";
  }
}

function Age_Function()
{
    var Age = document.getElementById("Age").value;
    if ( Age >= 19){
        document.getElementById("How_old").innerHTML = "You are allowed to buy alcohol";
    }
    else{
        document.getElementById("How_old").innerHTML = "You are not enough old to buy alcohol! Drink chocklate milk.";
    }
}