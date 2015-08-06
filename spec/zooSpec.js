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

//needs to check location...
  describe('#changeLocation', function(){
    it('should change locations', function(){
      expect(zoo.changeLocation("denver")).toContain("denver");
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      zoo.status = "closed";
      expect(zoo.open()).toEqual('The zoo is now open!');
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
      // add spec
    });
    it('should add an animal to the animals array', function(){
      // add spec
    });

    it('should only add instances of animals', function(){
      // add spec
    });

    it('should not add duplicates', function(){
      // add spec
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      // add spec
    });
  });
});

