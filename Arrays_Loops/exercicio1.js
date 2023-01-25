// Exrecício 0

const nomesDePaises = ['Brasil', 'Argentina', 'Franca', 'Suecia', 'Inglaterra'];
nomesDePaises.push('Alemanha');
console.log(nomesDePaises);

nomesDePaises.pop();
console.log(nomesDePaises);

nomesDePaises.unshift('Africa');
console.log(nomesDePaises);

nomesDePaises.shift();
console.log(nomesDePaises);


const ultimo = nomesDePaises[nomesDePaises.length - 1];
console.log(ultimo);


console.log(nomesDePaises[1]);
console.log(nomesDePaises[2]);