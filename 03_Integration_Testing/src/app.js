const express = require("express");
const { hexToRgb } = require("./hexToRgb");

const app = express();

app.get("/api/hex-to-rgb/:hex", (req, res) => {
  try {
    const rgb = hexToRgb(req.params.hex);
    res.json({ hex: req.params.hex, ...rgb });
  } catch (err) {
    res.status(400).json({ error: "InvalidHex" });
  }
});

module.exports = { app };
