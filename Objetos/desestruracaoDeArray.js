// Desestruturação de Array.

const array = [1, 2, 3, 4, 5, 6];

//Metódo manual
// const a = array [0];
// const b = array [1];

// const [a, ...resto, b] = array; // não funciona

const [a, b, ...resto] = array; // funciona. Resto tem que ser o último
console.log(a, b, resto);