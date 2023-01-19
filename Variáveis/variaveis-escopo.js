{
    // const idade está dentro do escopo.
    const idade = 30;
    {
        console.log(idade);
        let nome = "Dr";
    }
    // nome esta fora do escopo.
    console.log(nome);

}

// idade está fora do escopo.
console.log(idade);