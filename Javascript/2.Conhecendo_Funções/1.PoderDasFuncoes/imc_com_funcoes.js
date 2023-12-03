
function calcularImc(peso, altura){
    // Verifica se as entradas são números válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        return 'Erro: Entrada de dados inválida.';
    }
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
    if (imc < 18.5) {
        return `IMC: ${imc.toFixed(2).replace('.', ',')}. Abaixo do peso.`;
    } else if (imc <= 25) {
        return `IMC: ${imc.toFixed(2).replace('.', ',')}. Peso normal.`;
    } else if (imc <= 30) {
        return `IMC: ${imc.toFixed(2).replace('.', ',')}. Acima do peso.`;
    } else if (imc <= 40) {
        return `IMC: ${imc.toFixed(2).replace('.', ',')}. Obeso.`;
    } else if (imc > 40) {
        return `IMC: ${imc.toFixed(2).replace('.', ',')}. Obesidade Grave.`;
    } else {
        return 'Erro: Entrada de dados inválida.';
    }
}

// Main
(function (){
    const peso = 105; //kg
    const altura = 1.90; //m
    const imc = calcularImc(peso, altura)
    console.log(classificarImc(imc))
})();
