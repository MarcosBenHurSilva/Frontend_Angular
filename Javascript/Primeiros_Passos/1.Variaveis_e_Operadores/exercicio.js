/* Faça um programa para calcular o valor de uma viagem. 
Você terá 3 variaveis. sendo elas: 
1-Preço do combustivel; 
2-Gasto médio de combustível do carro por Km; 
3-Distância em Km da viagem; */

let preco_combustivel = 5.63;
let gasto_medio_combustivel = 2.6;
let distancia_viagem = 72.28;

let valor_combustivel_gasto = (distancia_viagem/gasto_medio_combustivel) * preco_combustivel

console.log('Valor da viagem: R$'+ valor_combustivel_gasto.toFixed(2)); // km / (l/km) * (r$/l)
