/*
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno 
    em um semestre da faculdade calcule e imprima a sua média e a sua 
    classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;

*/

let n1 = 9.5;
let n2 = 8.5;
let n3 = 6.5;

let media = ((n1 + n2 + n3) / 3);

if(media < 5){
    console.log('Média: ' + media.toFixed(2).replace('.', ',') + '. Aluno reprovado.')
} else if(media >= 5 && media < 7) {
    console.log('Média: ' + media.toFixed(2).replace('.', ',') + '. Aluno em recuperação.')
} else {
    console.log('Média: ' + media.toFixed(2).replace('.', ',') + '. Aluno passou de Semestre.')
}
