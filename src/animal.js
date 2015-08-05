var Animal = function(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
};

Animal.prototype.oink = function() {
  if (this.kind === "pig") {
    return "oink!";
  }else{
    return "I shan't oink, for I am no pig";
  }
};

Animal.prototype.growUp = function(){
  return this.age + 1;
};

Animal.prototype.feed = function(){
  if (this.awake === true){
    return "NOM NOM NOM";
  }else{
    return "zzzzzzz";
  }
};

Animal.prototype.wakeUp = function(){
  this.awake = true;
  return "I'm awake!";
};

Animal.prototype.sleep = function(){
  this.awake = false;
  return "zzzzzz";
};


var pig = new Animal("Charlotte", 2, "pig");
var dinosaur = new Animal("Blue", 4, "Velociraptor");


module.exports = Animal;
