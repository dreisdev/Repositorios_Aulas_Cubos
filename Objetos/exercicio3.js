// Exercício3
const produtosConsumidos = [{
    nome: 'Coca-Cola',
    precoUnit: 5.20,
    quantidadeComprada: 3
},
{
    nome: 'Yakissoba',
    precoUnit: 35.00,
    quantidadeComprada: 1
},
{
    nome: 'Torta_De_Chocolate',
    precoUnit: 25.00,
    quantidadeComprada: 1
}]

const cartao = {
    nome: 'Diego Reis',
    idadeCliente: 33,
    produtosConsumidos
};

console.log(cartao.nome);
console.log(cartao.idadeCliente);

cartao.idadeCliente = 35;
console.log(cartao.idadeCliente);
console.log(cartao.produtosConsumidos[0].nome);
console.log(cartao.produtosConsumidos[produtosConsumidos.length - 1].precoUnit);
