// if, else if encadeados

const idade = 80;

// menor de 18 -> menor de idade
// maior de idade, mas menor ou igual a 65 anos -> adulto
// acima de 65 anos -> idoso

if (idade < 18) {
    console.log("Menor de idade");

} else if (idade <= 65) {
    console.log("Adulta");
} else {
    console.log("Idosa");
}