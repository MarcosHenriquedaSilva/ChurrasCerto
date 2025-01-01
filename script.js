<<<<<<< HEAD
//Carne - 400 gr por pessoa + de 6 horas - 650
//Cerveja - 1200 ml por pessoa + 6 hotas - 200ml
//Refrigerante/agua - 100 ml por possoa + 6 horas - 1500 ml

//Criancas vales por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${ Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Refrigerantes / Sucos </p>`



}

    function carnePP(duracao){
        if (duracao >= 6) {
            return 650;
        } else {
            return 400;
        }
    }
    function cervejaPP(duracao){
        if (duracao >= 6) {
            return 2000;
        } else {
            return 1200;
        }
    }

    
  function bebidasPP(duracao){
        if (duracao >= 6) {
            return 1500;
        } else {
            return 1000;
        }
    }
    
   
=======
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
>>>>>>> 0310190 (Primeiro commit)
