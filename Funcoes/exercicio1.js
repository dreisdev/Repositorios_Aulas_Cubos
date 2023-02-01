// Exercício Resolvido 1.

let dadosPessoais = {
    nome: "Diego",
    idade: 33,
    profissao: "Desenvolvedor",
    altura: 1.79

};

function apresentacao(dadosPessoais) {
    console.log(`Olá! Meu nome é ${dadosPessoais.nome}, sou um jovem de ${dadosPessoais.idade}anos,
     ${dadosPessoais.altura}m de altura e sou ${dadosPessoais.profissao}`);
}

apresentacao(dadosPessoais);