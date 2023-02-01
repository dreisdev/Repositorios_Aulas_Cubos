// Exercício Resolvido 3.

function deternarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem";

    } else if (idade < 66) {
        return "adulto (a)";
    } else {
        return "idoso (a)";
    }
}

function apresentar(pessoa) {
    const faixaEtaria = deternarFaixaEtaria(pessoa.idade);

    console.log(`Sou ${pessoa.nome}, sou um(a) ${faixaEtaria} de ${pessoa.idade}
    e sou ${pessoa1.profissao}.`);
}

const pessoa1 = {
    nome: "José",
    idade: 12,
    altura: 1.4,
    profissao: "estudante"


}
apresentar(pessoa1);


