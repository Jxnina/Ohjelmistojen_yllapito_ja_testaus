const { expect } = require("chai");
const { hexToRgb } = require("../../src/hexToRgb");

describe("hexToRgb()", () => {
  it("muuntaa 6-merkkisen heksin RGB:ksi", () => {
    expect(hexToRgb("ff00aa")).to.deep.equal({ r: 255, g: 0, b: 170 });
  });

  it("muuntaa 3-merkkisen heksin RGB:ksi", () => {
    expect(hexToRgb("#0f8")).to.deep.equal({ r: 0, g: 255, b: 136 });
  });

  it("heittaa virheen virheellisesta heksista", () => {
    expect(() => hexToRgb("xyz")).to.throw("InvalidHex");
  });
});
