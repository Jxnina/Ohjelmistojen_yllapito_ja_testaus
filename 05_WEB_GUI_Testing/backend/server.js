import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

function clamp(value) {
  const num = Number(value);
  if (Number.isNaN(num)) {
    return null;
  }
  return Math.min(255, Math.max(0, num));
}

function toHex(value) {
  return value.toString(16).padStart(2, "0");
}

app.get("/api/rgb-to-hex", (req, res) => {
  const r = clamp(req.query.r);
  const g = clamp(req.query.g);
  const b = clamp(req.query.b);

  if (r === null || g === null || b === null) {
    return res.status(400).json({ error: "Invalid RGB values" });
  }

  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  return res.json({ r, g, b, hex });
});

app.get("/api/hex-to-rgb", (req, res) => {
  const raw = (req.query.hex || "").toString().trim();
  const hex = raw.startsWith("#") ? raw.slice(1) : raw;

  if (!/^[0-9a-fA-F]{6}$/.test(hex)) {
    return res.status(400).json({ error: "Invalid hex value" });
  }

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  return res.json({ hex: `#${hex.toLowerCase()}`, r, g, b });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
