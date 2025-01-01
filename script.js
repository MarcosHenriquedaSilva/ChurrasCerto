document.getElementById('calcular-btn').addEventListener('click', function() {
    // Coletando os valores dos inputs e convertendo para números
    const adultos = parseInt(document.getElementById('adultos').value);
    const criancas = parseInt(document.getElementById('criancas').value);
    const duracao = parseInt(document.getElementById('duracao').value);

    // Validando os valores
    if (isNaN(adultos) || adultos <= 0 || isNaN(criancas) || criancas < 0 || isNaN(duracao) || duracao <= 0) {
        alert('Por favor, preencha todos os campos corretamente!');
        return;
    }

    // Coletando carnes selecionadas
    const carnesSelecionadas = document.querySelectorAll('input[name="carne"]:checked');
    if (carnesSelecionadas.length === 0) {
        alert('Por favor, selecione ao menos uma carne!');
        return;
    }

    // Definindo a quantidade de carne por pessoa (ajustado para 400g por adulto)
    const carnePorPessoa = 0.4; // 400g de carne por pessoa, ajustado conforme necessidade

    // Calculando o número total de pessoas (adultos + crianças)
    const quantidadeTotalPessoas = adultos + criancas;

    // Calculando a quantidade total de carne (em kg)
    const totalCarne = quantidadeTotalPessoas * carnePorPessoa * carnesSelecionadas.length;

    // Exibindo o resultado
    document.getElementById('resultado').innerHTML = `
        <p>Para ${quantidadeTotalPessoas} pessoas e ${duracao} horas de churrasco, você vai precisar de:</p>
        <p><strong>${(totalCarne).toFixed(2)} kg de carne</strong> no total.</p>
        <p><strong>Carnes selecionadas:</strong> ${Array.from(carnesSelecionadas).map(c => c.value).join(', ')}</p>
    `;
});
