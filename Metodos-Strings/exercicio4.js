// transforme "jose messias junior"
// em Jose Messias Junior

let nome = "jose messias junior";
let ArrayDeNomes = nome.split(" ");

let nomeFormatado = "";
for (let item of ArrayDeNomes) {
    //transformar aninicial de cada item em maiúscula
    let primeiraLetra = item.slice(0, 1);
    let restanteDonome = item.slice(1);

    nomeFormatado += primeiraLetra.toUpperCase() + restanteDonome + " ";
}

console.log(nomeFormatado.trim());