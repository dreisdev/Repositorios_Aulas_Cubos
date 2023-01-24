// Compra produto --- Avista / Parcelado

const valorDaCompra = 421;
const numeroDeParcelas = 5;
const desconto = 0.10
const avista = 0.90

if (numeroDeParcelas === 1) {
    console.log(`Sua compra foi á vista e você teve um desconto de ${desconto * 100}% Total a pagar R$ ${(valorDaCompra * avista).toFixed(2)} reais`)
} else {
    console.log(`*Sem desconto - compra foi parcelada em ${numeroDeParcelas}x Total a pagar R$ ${valorDaCompra.toFixed(2)}, em ${numeroDeParcelas} parcelas de R$ ${(valorDaCompra / numeroDeParcelas).toFixed(2)}.`)
}