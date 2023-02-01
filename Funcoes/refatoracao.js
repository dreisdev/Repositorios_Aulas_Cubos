//Refatoração código apresentação.

function verificacaoFaixaEtaria2(idade) {

    if (idade < 25) {
        return `Meu nome é ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos
        e sou ${pessoa.profissao}.`;

    } else if (idade < 65) {

        return `Meu nome é ${pessoa.nome}, sou um(a) adulto (a) de ${pessoa.idade} anos
        e sou ${pessoa.profissao}.`;

    } else {
        return `Meu nome é ${pessoa.nome}, sou um(a) idoso (a) de ${pessoa.idade} anos
        e sou ${pessoa.profissao}.`;

    }


}

// Usuários
const pessoa1 = {
    nome: "José",
    idade: 30,
    profissao: "professor"
}

const pessoa2 = {
    nome: "Pedro",
    idade: 65,
    profissao: "médico"
}

const pessoa3 = {
    nome: "Milena",
    idade: 31,
    profissao: "administradora"
}

let pessoa = pessoa3;
console.log(verificacaoFaixaEtaria2(pessoa.idade));
