function hexToRgb(hex) {
  if (typeof hex !== "string") {
    throw new Error("InvalidHex");
  }

  const normalized = hex.trim().replace(/^#/, "");
  if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$/.test(normalized)) {
    throw new Error("InvalidHex");
  }

  const fullHex = normalized.length === 3
    ? normalized.split("").map((c) => c + c).join("")
    : normalized;

  const r = parseInt(fullHex.slice(0, 2), 16);
  const g = parseInt(fullHex.slice(2, 4), 16);
  const b = parseInt(fullHex.slice(4, 6), 16);

  return { r, g, b };
}

module.exports = { hexToRgb };
