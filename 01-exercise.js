const prompt = require("prompt-sync")({ sigint: true });

const input = Number(prompt("Masukkan angka yang ingin dijumlahkan: "));

if (input % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}
