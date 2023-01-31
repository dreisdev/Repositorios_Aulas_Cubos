// Conta do Cliente
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

const contaP1 = produtosConsumidos[0].quantidadeComprada * produtosConsumidos[0].precoUnit;
const contaP2 = produtosConsumidos[1].quantidadeComprada * produtosConsumidos[1].precoUnit;
const contaP3 = produtosConsumidos[2].quantidadeComprada * produtosConsumidos[2].precoUnit;
const totalAPagar = contaP1 + contaP2 + contaP3;

console.log(`Prezado Sr. ${cartao.nome}, o valor total a pagar é R$${totalAPagar.toFixed(2)}`);