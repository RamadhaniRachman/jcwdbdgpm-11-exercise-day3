const prompt = require("prompt-sync")({ sigint: true });

const namaItem = prompt("Masukkan nama item : ");
const harga = Number(prompt("Masukkan harga item : "));
const isMember = Number(prompt("Apakah member? (1 = yes, 0 = no): "));

const taxRate = 0.5;
const discRate = 0.5;

let discAmount = harga * discRate * isMember;
let taxAmount = harga * taxRate;

let totalPrice = harga + taxAmount - discAmount;
console.log("\n===== RECEIPT =====");
console.log(`Item ${namaItem}`);
console.log(`Harga Awal ${harga}`);
console.log(`Tax ${taxAmount}`);
console.log("-------------------");
console.log(`Harga total ${totalPrice}`);

if (isMember == 1) {
  console.log("Discount Member Applied");
} else {
  console.log("Gabung menjadi Member kita");
}
