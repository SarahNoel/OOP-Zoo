var Animal = function(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
};

var Zoo = function(name, location, status){
  this.name = name;
  this.location = location;
  this.status = status;
  this.animals = [];
};

Zoo.prototype.changeLocation = function(newLocale){
  this.location = newLocale;
  return "The zoo has been moved to " + newLocale;
};

Zoo.prototype.open = function(){
  this.status = "open";
  return "The zoo is now open!";
};

Zoo.prototype.close = function(){
  this.status = "closed";
  return "The zoo is now closed.";
};

Zoo.prototype.isOpen = function(){
  if(this.status === "open"){
    return "Open!";
  }else{
    return "Closed";
  }
};

Zoo.prototype.addAnimal = function(animal){
  if((this.status === "open") && (this.animals.indexOf(animal) === -1) && (animal instanceof Animal)){
    this.animals.push(animal);
    return this.animals;
  }
  else{
    return "Sorry, we can't take that creature.";
  }
};

Zoo.prototype.removeAnimal = function(animal){
  if(this.status ==="open"){
    var index;
    index = this.animals.indexOf(animal);
    this.animals.splice(index, 1);
    return "Goodbye, animal.";
  }else{
    return "You can't have that animal!";
  }
};

var sanDiego = new Zoo("San Diego Zoo", "San Diego", "open");
var cheyMtn = new Zoo("Cheyenne Mountain Zoo", "Colorado Springs", "closed");

console.log(sanDiego, cheyMtn);


module.exports = Zoo;
