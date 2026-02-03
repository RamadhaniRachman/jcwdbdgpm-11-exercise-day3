const prompt = require("prompt-sync")({ sigint: true });

const input = prompt("Masukkan angka fibo : ");

let a = 0;
let b = 1;
// kenapa jadi dimulai dari 1 bukan dari 0?
//karena
for (i = 1; i < input; i++) {
  let next = a + b;
  a = b;
  b = next;
}
console.log(b);
