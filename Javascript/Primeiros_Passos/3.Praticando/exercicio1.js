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

let n1 = 7.0;
let n2 = 7.0;
let n3 = 7;

let media = (n1 + n2 + n3) / 3;

if(media >= 0 && media < 5){
    console.log('Média: ' + media.toFixed(2).replace('.', ',') + '. Aluno reprovado.')
} else if(media >= 5 && media <= 7) {
    console.log('Média: ' + media.toFixed(2).replace('.', ',') + '. Aluno em recuperação.')
} else if(media > 7 && media <= 10){
    console.log('Média: ' + media.toFixed(2).replace('.', ',') + '. Aluno passou de Semestre.')
} else {
    console.log('Entrada inválida.')
}
