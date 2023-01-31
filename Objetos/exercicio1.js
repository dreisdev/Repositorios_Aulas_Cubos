//Exrecício Resolvido 1
const pessoa = { nome: "Diego Reis", idade: 33, altura: 1.79, temCNH: true, apelidos: ["Di", "Januário", "Dreis.Dev"] };


const textoCNH = pessoa.temCNH ? "possui CNH" : "não possui CNH";


// Utilização do IF
//if (pessoa.temCNH) {
//    textoCNH = "possui CNH";
//} else {
//    textoCNH = "não possui CNH";
//}

console.log(`${pessoa.nome}, tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, e ${textoCNH} e os seguintes 
apelidos:`);
for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`)
}