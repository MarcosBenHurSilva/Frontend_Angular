// objeto
const pessoa = {
    nome: 'Marcos Silva',
    idade: 31,
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade e tenho ${this.idade} anos.`)
    }
};
pessoa.altura = 1.90;

// Editando o objeto
// pessoa.descrever = function(){
//     console.log(`Meu nome é ${this.nome}.`);
// }
// delete pessoa.nome;
// pessoa.nome = 'Marcos Ben-hur D. S.';
// pessoa.idade = 29;

//acesso dinamico aos valores do objeto
const atributo = 'idade';
pessoa['nome'] = 'Marcos S.'

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
        // callNome(pessoa);
        // callIdade(pessoa);
        // callAltura(pessoa);
        // callObject(pessoa);
        // pessoa.descrever();
        console.log(pessoa['nome']);
        console.log(pessoa[atributo]);
})();