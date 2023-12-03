
function sayMyName(name) {
    console.log('Your name is: ' + name);
}

sayMyName('Marcos');
sayMyName('Tobi')

console.log('========================================')

function quadrado(valor) {
    return Math.pow(valor, 2);
}
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);
console.log(quadrado(3))
console.log(quadrado(4) + quadrado(5))

console.log('========================================')

function incrementarJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros/100)*valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10))
console.log(incrementarJuros(100, 15))
console.log(incrementarJuros(100, 20))

console.log('========================================')

// Como organizar as funções
function main(){
    console.log('Programa principal');
}

main();
