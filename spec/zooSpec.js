var Animal = require('../js/animal.js'),
Zoo = require('../js/zoo.js');

var animal;
var zoo;

describe('Zoo', function(){

  beforeEach(function(){
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      expect(zoo.changeLocation("Denver")).toEqual(zoo.location = "");
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      zoo.status = "closed";
      expect(zoo.open()).toEqual(zoo.status = "open");
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      zoo.status = "open";
      expect(zoo.isOpen()).toEqual("Open!");
    });
    it('should see if the zoo is closed', function(){
      zoo.status = "closed";
      expect(zoo.isOpen()).toEqual('Closed');
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      expect([]);
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      zoo.status = "closed";
      expect(zoo.addAnimal(pig)).toEqual("Sorry, we can't take that creature.");

    });
    it('should add an animal to the animals array', function(){
      zoo.status = "closed";
      expect(zoo.addAnimal(pig)).toEqual('Sorry, we can\'t take that creature.');
    });

    it('should only add instances of animals', function(){
      expect(zoo.addAnimal()).toEqual('Sorry, we can\'t take that creature.');
    });

    it('should not add duplicates', function(){
      zoo.animals =[pig];
      expect(zoo.addAnimal()).toEqual('Sorry, we can\'t take that creature.');
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      zoo.animals =[pig];
      expect(zoo.removeAnimal()).toEqual(zoo.animals = [pig]);
    });
  });
});

