const request = require("supertest");
const { expect } = require("chai");
const { app } = require("../../src/app");

describe("GET /api/hex-to-rgb/:hex", () => {
  it("palauttaa RGB-arvot kelvolliselle heksille", async () => {
    const res = await request(app).get("/api/hex-to-rgb/ff00aa");
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ hex: "ff00aa", r: 255, g: 0, b: 170 });
  });

  it("palauttaa 400 virheelliselle heksille", async () => {
    const res = await request(app).get("/api/hex-to-rgb/zzzzzz");
    expect(res.status).to.equal(400);
    expect(res.body).to.deep.equal({ error: "InvalidHex" });
  });
});
