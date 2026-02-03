const prompt = require("prompt-sync")({ sigint: true });

const input = Number(prompt("Masukkan angka yang ingin dijumlahkan: "));

let faktorial = 1;

for (let i = 1; i <= input; i++) {
  faktorial = faktorial * i;
}

console.log("Hasil:", faktorial);
