// Classe
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        // Obtém o ano atual
        const anoAtual = new Date().getFullYear();
        // Calcula o ano de nascimento
        this.anoDeNascimento = anoAtual - idade;
    }
    descrever(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

function compararPessoas(p1, p2) {
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}.`)
    } else if(p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}.`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`)
    }
}

// objeto
// const marcos = {
//     nome: 'Marcos S',
//     idade: 29,
//     descrever: function(){
//         console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
//     }
// };
const marcos = new Pessoa('Marcos Ben-hur D.S.', 31); // melhor forma de declarar
// marcos.nome = 'Marcos Ben-hur D.S.';
// marcos.idade = 29;
const tobi = new Pessoa('Tobi', 6); // melhor forma de declarar
// tobi.nome = 'Tobi';
// tobi.idade = 6;

marcos.altura = 1.90;

// Editando o objeto
// marcos.descrever = function(){
//     console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e minha altura é ${this.altura.toFixed(2).replace('.', ',')}m.`);
// }
// delete marcos.nome;
marcos.nome = 'Marcos Ben-hur D. S.';
// marcos.idade = 29;

//acesso dinamico aos valores do objeto
const atributo = 'idade';
marcos['nome'] = 'Marcos Silva'

function callNome(object){
    console.log(object.nome);
}
function callIdade(object){
    console.log(object.idade);
}
function callAltura(object){
    console.log(object.altura);
}
function callObject(object){
    console.log(object);
}

(function(){
        // callNome(marcos);
        // callIdade(marcos);
        // callAltura(marcos);
        // callObject(marcos);
        //console.log(marcos['nome']);
        //console.log(marcos[atributo]);
        console.log(marcos);
        console.log(tobi);
        marcos.descrever();
        tobi.descrever();
        compararPessoas(marcos, tobi);
})();