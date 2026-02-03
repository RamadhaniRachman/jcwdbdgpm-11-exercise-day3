const prompt = require("prompt-sync")({ sigint: true });

const input = Number(prompt("Masukkan angka yang ingin dijumlahkan: "));
let isPrime = true;

// cek input
if (input <= 1) {
  //bilangan prima harus lebih dari 1
  isPrime = false;
} else {
  for (i = 2; i * i <= input; i++) {
    if (input % i == 0) {
      isPrime = false;
    }
  }
}

if (isPrime) {
  console.log("is a prime number");
} else {
  console.log("is not a prime number");
}
