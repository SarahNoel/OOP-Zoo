var Animal = require('../js/animal.js');

var animal;

describe('Animal', function(){

  beforeEach(function(){
    animal = new Animal("Fido", 27, "Pig");
  });

  describe('#oink', function(){
    it('should oink if it is a pig', function(){
      expect(animal.oink()).toEqual('oink');
    });
    it('should not oink if it is not pig', function(){
      animal.kind = 'lion';
      expect(animal.oink()).toEqual('I shan\'t oink, for I am no pig');
    });
  });

  describe('#growUp', function(){
    it('should increment the age by one', function(){
      animal.age = 3;
      expect(animal.growUp()).toEqual(4);
     });
  });

  describe('#awake', function(){
    it('should initially be off', function(){
      expect(false);
    });
  });

   describe('#wakeUp', function(){
    it('should change state to awake', function(){
      animal.awake = false;
      expect(animal.wakeUp()).toBeTruthy();
    });
  });

  describe('#sleep', function(){
    it('should initially be sleeping', function(){
      animal.awake = true;
      expect(animal.sleep()).toBeFalsy();
    });
  });

  describe('#feed', function(){
    it('should get fed if awake', function(){
      animal.awake = true;
      expect(animal.feed()).toBeTruthy();
    });
    it('not should get fed if sleeping', function(){
      animal.awake = false;
      expect(animal.feed()).toEqual("zzzzzzz");
    });
  });

});
