// Ternário - Utilizado para situações em que a condicional é simples.

const saldo = 30;

const unidade = (saldo === 1 ? "real" : "reais");

console.log(` Você tem ${saldo} ${unidade}`);

// if (saldo === 1) {
//    unidade = "real"
// } else {
//    unidade = "reais"    
