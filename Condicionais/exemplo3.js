//Exemplo controle cinema com operador lógico "OU - ||"

const temIgresso = true;
const censura = 16;
const idade = 14;
const estaComOsPais = true;

// tem ingresso E
// tem idade maior ou igual a censura OU está com os pais

if (temIgresso === true) {
    if (idade >= censura || estaComOsPais === true) {
        console.log("Pode entrar");
    } else {
        console.log("Barrada");
    }
} else {
    console.log("Barrada");
}