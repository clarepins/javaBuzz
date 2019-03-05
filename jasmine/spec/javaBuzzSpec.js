"use strict";

describe('JavaBuzz', function () {
  var javaBuzz;

  beforeEach(function() {
    javaBuzz = new JavaBuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(javaBuzz.isDivisibleBy3(3)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
      expect(javaBuzz.isDivisibleBy3(7)).toBe(false);
    });
  });

});
