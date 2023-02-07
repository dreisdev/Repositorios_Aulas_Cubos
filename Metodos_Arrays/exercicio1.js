function inverterString(texto) {

    const arrayDeLetras = texto.split("");
    arrayDeLetras.reverse();

    let textoInvertido = "";
    for (let letra of arrayDeLetras) {
        // textoInvertido = textoInvertido + letra;
        textoInvertido += letra; // faz o mesmo que a linha acima
    }
    console.log(textoInvertido);
}

inverterString("Cubos Academy");