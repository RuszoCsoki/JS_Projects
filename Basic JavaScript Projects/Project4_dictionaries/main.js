function my_Dictionary(){
  var Animal = {
      Speces :"Dog",
      Color : "White-Brown",
      Breed:"French Spaniel",
      Age:"6",
      Sound:"Bark! Woof-Woof"
  };
  delete Animal.Sound;
  document.getElementById("Dics").innerHTML = Animal.Sound;
}