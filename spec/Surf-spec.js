import  { Surf }  from '../src/Surf.js';

describe("Surf", function() {
  let newSurf;
  
  beforeEach(function() {
    newSurf = new Surf(3,3,3);
    newSurf.sizeChecker()
    newSurf.swellChecker()
  });
  
  it ("determines the overal score report", function() {
    
    expect(newSurf.calculateScore()).toEqual(4.333333333333333)
  });
  it ("determines the size checker function with input of 3", function() {
    
    expect(newSurf.sizeChecker()).toEqual(2)
  });
  it ("determines the size checker function with input of 3", function() {
    
    expect(newSurf.swellChecker()).toEqual(2)
  });
})