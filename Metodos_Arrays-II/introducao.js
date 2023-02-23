// Conceito Callbacks

//Funções normais
const imprimirNome = (nome) => {
    console.log(nome)
}

imprimirNome('Diego');

setTimeout(imprimirNome, 5000);