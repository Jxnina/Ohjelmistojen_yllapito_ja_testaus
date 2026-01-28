const { expect } = require("chai");
const mylib = require("../src/mylib");

describe("mylib (expect style)", () => {

  before(() => {
    // before all tests
  });

  after(() => {
    // after all tests
  });

  describe("add()", () => {
    it("should add two numbers correctly", () => {
      expect(mylib.add(2, 3)).to.equal(5);
    });
  });

  describe("sub()", () => {
    it("should subtract two numbers correctly", () => {
      expect(mylib.sub(10, 4)).to.equal(6);
    });
  });

  describe("mul()", () => {
    it("should multiply two numbers correctly", () => {
      expect(mylib.mul(6, 7)).to.equal(42);
    });
  });

  describe("div()", () => {
    it("should divide two numbers correctly", () => {
      expect(mylib.div(8, 2)).to.equal(4);
    });

    it("should throw an error if divisor is zero", () => {
      expect(() => mylib.div(1, 0)).to.throw("ZeroDivision");
    });
  });

});
