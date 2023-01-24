// Exemplo - Programa Controle Cinema

const temIgresso = false;
const censura = 16;
const idade = 33;

// Programa vai checar com base na variaveis temIgresso / censura / idade.
// Primeiro: Verificar se a pessoa tem ingresso - Se não tiver encerra o programa.
// Segundo, se tiver ingresso, o progrma em seguida irá verificar idade da pessoa.

if (temIgresso === true) {
    if (idade >= censura) {
        console.log("Pode entrar");
    } else {
        console.log("Barrada pela censura.");
    }
} else {
    console.log("Barrada por falta de ingresso.");
}
