/*
1) Crie um programa que dado um número imprima a sua tabuada.
*/

const num = 2;
for (let i = 1; i <= 10; i++) {
    //console.log(num * i)
}

function tabuada(numero){
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    } 
}

(function(){
    tabuada(4);
})();