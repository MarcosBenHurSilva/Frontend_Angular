
const notas = [];

notas.push(5);
notas.push(10);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota; // = soma = soma + nota
}

const media = soma / notas.length;
console.log(media.toFixed(2).replace('.', ',')); 