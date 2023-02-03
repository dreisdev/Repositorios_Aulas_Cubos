//Exercício resolvido 2 - Replace

const substituicao = /,/gi;

const numeroComVirgula = "Ganhador da mega-sena faturou 1,350,000";

const numeroComPontos = numeroComVirgula.replace(substituicao, ".");

console.log(numeroComPontos);
console.log(numeroComVirgula);