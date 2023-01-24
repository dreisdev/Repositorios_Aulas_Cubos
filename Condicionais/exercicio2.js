// Compra produto --- Avista / Parcelado - Com juros de 1% ao mês

const valorDaCompra = 100;
const numeroDeParcelas = 7;
const desconto = 0.10;
const avista = 0.90;
const periodo = numeroDeParcelas;
const capital = valorDaCompra;
const taxaJuros = 0.01;
const montante = Math.pow(1 + taxaJuros, periodo) * capital;

if (numeroDeParcelas === 1) {

    console.log(`Sua compra foi á vista e você teve um desconto de ${desconto * 100}% Total a pagar R$ ${(valorDaCompra * avista).toFixed(2)} reais`)
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {

    console.log(`*Sem desconto - compra foi parcelada em ${numeroDeParcelas}x Total a pagar R$ ${valorDaCompra.toFixed(2)}, em ${numeroDeParcelas} parcelas de R$ ${(valorDaCompra / numeroDeParcelas).toFixed(2)}.`)

} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {

    console.log(`*Compra com Juros - compra foi parcelada em ${numeroDeParcelas}x Total a pagar R$ ${montante.toFixed(2)}, em ${numeroDeParcelas} parcelas de R$ ${(montante / numeroDeParcelas).toFixed(2)}.`)

} else {

    console.log("Número de Parcelas inválido")
}