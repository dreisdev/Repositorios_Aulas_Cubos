function inverterString(texto) {

    const arrayDeLetras = texto.split("");
    arrayDeLetras.reverse();

    const textoInvertido = arrayDeLetras.join("");
    console.log(textoInvertido);
}

inverterString("Cubos Academy");
