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
    classificarImc(){
        const imc = this.calcularImc();
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
}

const jose = new Pesoa('José', 70.0, 1.75)

console.log(jose);
console.log(`Meu nome é ${jose.nome} e meu IMC é: ${jose.calcularImc().toFixed(2).replace('.',',')}.`)
console.log(jose.classificarImc());

const marcos = new Pesoa('Marcos', 90.0, 1.90)
console.log(marcos);
console.log(`Meu nome é ${marcos.nome} e meu IMC é: ${marcos.calcularImc().toFixed(2).replace('.',',')}.`)
console.log(marcos.classificarImc());