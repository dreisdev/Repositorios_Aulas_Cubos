//Exercício Auloa metodos

/* function deternarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem";

    } else if (idade < 66) {
        return "adulto (a)";
    } else {
        return "idoso (a)";
    }
} */



const pessoa1 = {
    nome: "José",
    idade: 12,
    altura: 1.4,
    profissao: "estudante",
    apresentar: function () {
        const faixaEtaria = this.faixaEtaria(this.idade);

        console.log(`Sou ${this.nome}, sou um(a) ${faixaEtaria} de ${this.idade}
        e sou ${this.profissao}.`);
    },
    faixaEtaria: function () {

        if (this.idade <= 21) {
            return "jovem";

        } else if (this.idade < 66) {

            return "adulto (a)";
        } else {

            return "idoso (a)";
        }
    }
}
pessoa1.apresentar();
pessoa1.faixaEtaria();