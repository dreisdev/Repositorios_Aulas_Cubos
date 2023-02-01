// verificar se uma pessoa é maior de idadde

function verificarMaioridade(idade) {
    if (idade >= 18) {
        //é maior de idade
        return true;
        console.log("Essa linha não vai ser executada");
    } else {
        // não é maior de idade
        return false;
    }
}

const valorRetornadoPelaFuncao = verificarMaioridade(20);
console.log(valorRetornadoPelaFuncao);