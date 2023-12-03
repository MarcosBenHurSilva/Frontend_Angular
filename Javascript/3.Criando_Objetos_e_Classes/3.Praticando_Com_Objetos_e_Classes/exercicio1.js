/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    valorCombustivelGasto(distanciaKm, precoDoCombustivel){
        return (distanciaKm * this.gastoMedioPorKm) * precoDoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', 1/12) //km / (l/km)
const gol = new Carro('Volks', 'Branco', 1/10)

console.log(uno);
console.log(`O valor gasto é de R$ ${uno.valorCombustivelGasto(70, 5).toFixed(2).replace('.',',')}.`);
console.log(gol);
console.log(`O valor gasto é de R$ ${gol.valorCombustivelGasto(70, 5).toFixed(2).replace('.',',')}.`);
