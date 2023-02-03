// saber se é um email válido
// tem que ter pelo menos um @
// tem que ter pelo menos um . depois do @

const possivelEmail = "jose.messias@cubos.academy"

const indexArroba = possivelEmail.indexOf("@");

const indexAposArroba = possivelEmail.indexOf(".", indexArroba);

if (indexAposArroba > indexArroba) {
    console.log("Email atende as requisições");
} else {
    console.log("Não há nenhum ponto apos o arroba.");
}