// Conceito de Boolean e Condicional
const camisetaCinza = true;
const camisetaAzul = false;
console.log(10 > 9); // true
console.log(10 < 9); // false

// Exemplo com resto de divisão

const numero = 5;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0 || numero === 5) {
  console.log('O número é inválido');
} else if (numeroDivisivelPor5) {
  console.log('O número é divisível por 5');
} else {
  console.log('O número não é divisível por 5');
}

console.log('-----------------------------------------------------');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (num) => {
  // Converte o input para um número
  const numero = parseFloat(num);

  const numPar = (numero % 2) === 0;

  // Usando if-else
  if (numPar) {
    console.log('Usando if-else: O número é par');
  } else {
    console.log('Usando if-else: O número é ímpar');
  }

  // Usando operador ternário
  const mensagem = numPar ? 'Par' : 'Ímpar';
  console.log('Usando operador ternário: ' + mensagem);

  rl.close();
});
