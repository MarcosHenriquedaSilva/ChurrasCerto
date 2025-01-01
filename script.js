document.getElementById('calcular-btn').addEventListener('click', function() {
    const adultos = parseInt(document.getElementById('adultos').value);
    const criancas = parseInt(document.getElementById('criancas').value);
    const duracao = parseInt(document.getElementById('duracao').value);
    let resultado = '';

    if (isNaN(adultos) || isNaN(criancas) || isNaN(duracao)) {
        resultado = 'Por favor, preencha todos os campos.';
    } else {
        const carnePorAdulto = 400; // 400g por adulto
        const carnePorCrianca = 200; // 200g por criança
        const carneTotal = (adultos * carnePorAdulto) + (criancas * carnePorCrianca);

        resultado = `Total de carne necessário: ${carneTotal / 1000} kg`;
    }

    document.getElementById('resultado').innerHTML = resultado;
});
