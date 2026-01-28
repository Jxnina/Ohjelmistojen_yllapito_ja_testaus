// main.js
const mylib = require("./src/mylib");

function main() {
  console.log("2 + 3 =", mylib.add(2, 3));
  console.log("10 - 4 =", mylib.sub(10, 4));
  console.log("6 * 7 =", mylib.mul(6, 7));
  console.log("8 / 2 =", mylib.div(8, 2));
}

if (require.main === module) {
  main();
}

module.exports = { main };
