//Função para verificar Faixa etária

function verificacaoFaixaEtaria(idade) {
    if (idade <= 21) {
        return "Jovem";

    } if (idade > 21 && idade <= 65) {
        return "Adulto(a)";

    } else if (idade >= 66) {
        return "idoso(a)"
    }
}
// Não é obrigatório colocar isso em variável.
const resultadoIdade = verificacaoFaixaEtaria(67);
console.log(resultadoIdade);