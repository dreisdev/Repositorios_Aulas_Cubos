// Spread, função de espalhar os objetos.

const pessoa = {
    nome: "Diego",
    idade: 33,
    cidade: "Salvador",
    profissao: "Dev"
};

const endereco = {
    rua: "Aqui",
    numero: 22,
    bairro: "centro"
};

const objetoFundido = {
    ...pessoa,
    estado: "Bahia",
    ...endereco,
    novaPropriedade: 20

};

console.log(objetoFundido);