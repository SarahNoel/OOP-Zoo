//Animal constructor
var Animal = function(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
};

//method to make pig Animals oink
Animal.prototype.oink = function() {
  if (this.kind.toUpperCase() === "PIG") {
    return "oink";
  }else{
    return "I shan't oink, for I am no pig";
  }
};

//increase Animal age by 1 year
Animal.prototype.growUp = function(){
  return this.age + 1;
};

//feeds Animal if the status is awake
Animal.prototype.feed = function(){
  if (this.awake === true){
    return "NOM NOM NOM";
  }else{
    return "zzzzzzz";
  }
};

//changes Animal awake status to true
Animal.prototype.wakeUp = function(){
  this.awake = true;
  return true;
};

//changes Animal awake status to false
Animal.prototype.sleep = function(){
  this.awake = false;
  return false;
};

//example Animals
var pig = new Animal("Charlotte", 2, "pig");
var dinosaur = new Animal("Blue", 4, "Velociraptor");

module.exports = Animal;
