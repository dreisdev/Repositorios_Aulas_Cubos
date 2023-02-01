// Escopo

//variável fora do escopo da função
// Um boa prática, é sempre utilizar variáveis dentro do escopo da função.

let z = 5;

function soma(x, y) {
    return x + y + z
}

console.log(soma(5, 3))