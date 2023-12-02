/* Faça um programa para calcular o valor de uma viagem. 
Você terá 3 variaveis. sendo elas: 
1-Preço do combustivel; 
2-Gasto médio de combustível do carro por Km; 
3-Distância em Km da viagem; */

// Constantes
const precoCombustivel = 5.63; // Preço do combustível em R$/litro
const kmLitrros = 5.8; // Gasto médio de combustível do carro por Km/l

// Variável
let distanciaKm = 100.00; // Distância da viagem em Km

// Cálculo do valor da viagem
let litrosConsumidos = distanciaKm / kmLitrros; // km / (l/km)
let valorCombustivelGasto = litrosConsumidos * precoCombustivel // l * (r$/l)

// Exibição do resultado
console.log('Valor da viagem: R$ ' + valorCombustivelGasto.toFixed(2).replace('.', ',')); 
