// Exercício slice

//Quero obter apenas os dois dígitos
//do estado de uma cidade.

const cidade = "Aracaju-SE";



const penultimoIndex = cidade.length - 2;
let estado = cidade.indexOf("BA");
estado = cidade.slice(penultimoIndex);

console.log(estado);