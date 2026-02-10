const rgbForm = document.getElementById("rgbForm");
const hexForm = document.getElementById("hexForm");
const rgbToHex = document.getElementById("rgbToHex");
const hexToRgb = document.getElementById("hexToRgb");
const rgbToHexSwatch = document.getElementById("rgbToHexSwatch");
const hexToRgbSwatch = document.getElementById("hexToRgbSwatch");

const apiBase = "http://localhost:3000/api";

function setSwatch(el, value) {
  el.style.background = value;
}

rgbForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(rgbForm);
  const r = data.get("r");
  const g = data.get("g");
  const b = data.get("b");

  const response = await fetch(`${apiBase}/rgb-to-hex?r=${r}&g=${g}&b=${b}`);
  const payload = await response.json();
  rgbToHex.textContent = payload.hex;
  setSwatch(rgbToHexSwatch, payload.hex);
});

hexForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(hexForm);
  const hex = data.get("hex");

  const response = await fetch(`${apiBase}/hex-to-rgb?hex=${encodeURIComponent(hex)}`);
  const payload = await response.json();
  const rgbText = `rgb(${payload.r}, ${payload.g}, ${payload.b})`;
  hexToRgb.textContent = rgbText;
  setSwatch(hexToRgbSwatch, hex);
});
