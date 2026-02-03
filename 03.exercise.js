const prompt = require("prompt-sync")({ sigint: true });

const input = Number(prompt("Masukkan angka yang ingin dijumlahkan: "));

let sum = 0;
for (let i = 1; i <= input; i++) {
  sum += i;
}

console.log("Hasil:", sum);
