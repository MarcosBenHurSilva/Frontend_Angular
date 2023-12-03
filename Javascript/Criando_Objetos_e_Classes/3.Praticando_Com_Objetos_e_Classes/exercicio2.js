/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/
class Pesoa{
    nome;
    peso;
    altura;
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc() {
        return this.peso / (Math.pow(this.altura, 2));
    }
}

const jose = new Pesoa('José', 70.0, 1.75)

console.log(`Meu nome é ${jose.nome} e meu IMC é: ${jose.calcularImc().toFixed(2).replace('.',',')}.`)