document.getElementById('calcular-btn').addEventListener('click', function() {
    // Captura os valores dos inputs
    const adultos = parseInt(document.getElementById('adultos').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;
    const duracao = parseInt(document.getElementById('duracao').value) || 0;

    // Quantidades médias por pessoa (em kg para carne e litros para bebidas)
    const carnePorAdulto = 0.5; // 500g de carne por adulto
    const carnePorCrianca = 0.25; // 250g de carne por criança
    const bebidaPorAdulto = 2; // 2L de bebida por adulto
    const bebidaPorCrianca = 1; // 1L de bebida por criança

    // Cálculos
    const quantidadeCarne = (adultos * carnePorAdulto) + (criancas * carnePorCrianca);
    const quantidadeBebida = (adultos * bebidaPorAdulto) + (criancas * bebidaPorCrianca);

    // Considerando a duração do evento
    const quantidadeCarneFinal = quantidadeCarne * (duracao / 2); // A quantidade de carne aumenta conforme a duração
    const quantidadeBebidaFinal = quantidadeBebida * (duracao / 2); // A quantidade de bebida também aumenta

    // Exibição dos resultados
    const resultado = `
        <h2>Resultado</h2>
        <p>Quantidade de carne necessária: ${quantidadeCarneFinal.toFixed(2)} kg</p>
        <p>Quantidade de bebida necessária: ${quantidadeBebidaFinal.toFixed(2)} litros</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
});
