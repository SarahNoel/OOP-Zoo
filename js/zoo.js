//Animal constructor
var Animal = function(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
};

//Zoo constructor
var Zoo = function(name, location, status){
  this.name = name;
  this.location = location;
  this.status = status;
  this.animals = [];
};

//changes Zoo location
Zoo.prototype.changeLocation = function(newLocale){
  this.location = newLocale;
  return newLocale;
};

//changes Zoo status to open
Zoo.prototype.open = function(){
  this.status = "open";
  return this.status;
};

//changes Zoo status to closed
Zoo.prototype.close = function(){
  this.status = "closed";
};

Zoo.prototype.isOpen = function(){
  // if(this.status === "open"){
  //   return "Open!";
  // }else{
  //   return "Closed";
  // }
};

//adds Animal to Zoo if it is open and the animal is an Animal instance
Zoo.prototype.addAnimal = function(animal){
  if((this.status === "open") && (this.animals.indexOf(animal) === -1) && (animal instanceof Animal)){
    this.animals.push(animal);
    return this.animals;
  }
  else{
    return "Sorry, we can't take that creature.";
  }
};

//removes Animal from Zoo
Zoo.prototype.removeAnimal = function(animal){
  if(this.status ==="open"){
    var index;
    index = this.animals.indexOf(animal);
    this.animals.splice(index, 1);
  }
  return this.animals;
};

//example Zoos
var sanDiego = new Zoo("San Diego Zoo", "San Diego", "open");
var cheyMtn = new Zoo("Cheyenne Mountain Zoo", "Colorado Springs", "closed");

module.exports = Zoo;
