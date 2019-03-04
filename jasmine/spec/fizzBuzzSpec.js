"use strict";

describe("FizzBuzz", function() {
  var fizzBuzz

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe("#print", function() {
    it("should print the numbers 1 to 100", function() {
      var output = []
      for (var i = 1; i <= 100; i++) {
        output.push((fizzBuzz.print(i)));
      };
      expect(output.length).toEqual(100);
    });
  });
});
