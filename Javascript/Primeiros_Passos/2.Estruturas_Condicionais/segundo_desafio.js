/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

// Constantes
const precoDaGasolina = 5.63; // Preço do combustível em R$/litro
const precoDoEtanol = 3.64; 
const kmLitrros = 9.74; // Gasto médio de combustível do carro por Km/l
const tipoDeCombustivel = 'GaSoLiNa';
// const tipoDeCombustivel = 'eTANOL';
const distanciaKm = 175.41; // Distância da viagem em Km

// Variavel
let precoDoCombustivel;

// Cálculo do valor da viagem
let litrosConsumidos = distanciaKm / kmLitrros; // km / (l/km)

if(tipoDeCombustivel.toLocaleLowerCase() == 'gasolina') {
    precoDoCombustivel = precoDaGasolina;
} else if(tipoDeCombustivel.toLowerCase() == 'etanol') {
    precoDoCombustivel = precoDoEtanol;
} else {
    console.log('Tipo de combustivel não registrado')
}

let valorCombustivelGasto = litrosConsumidos * precoDoCombustivel // l * (r$/l)

// Exibição do resultado
if (isNaN(valorCombustivelGasto)) {
    console.log('Valor da viagem não disponível devido a entrada inválida.');
} else {
    console.log('Valor da viagem: R$ ' + valorCombustivelGasto.toFixed(2).replace('.', ','));
}
