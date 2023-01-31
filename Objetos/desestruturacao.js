// Desestruturação de Objetos.

const pessoa = {
    nome: "Diego",
    idade: 33,
    cidade: "Simões Filho",
    profissao: "Dev"
};

//Metódo manual de fazer a desestruturação
// const nome = pessoa.nome;
// const idade = pessoa.idade;

//Metódo utilizando a desestruturação.

const { nome, idade, ...outros } = pessoa;

console.log(nome, idade);
console.log(outros);