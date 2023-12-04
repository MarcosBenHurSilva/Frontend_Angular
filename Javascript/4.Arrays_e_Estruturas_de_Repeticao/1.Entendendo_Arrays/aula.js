
const alunos = ['João','Vitor','Marina']; //Lista

alunos.push('Renan');

alunos[1] = 'Vinicius';

alunos[4] = 'Marcos';

alunos.push(10);

const testes = [];
testes.push('teste');
testes.push(10);

console.log(alunos);
alunos.pop();
console.log(alunos);
alunos.shift();
console.log(alunos);
delete alunos[2];
console.log(alunos);
console.log(alunos[2]);
console.log(alunos[3]);
console.log(testes)
