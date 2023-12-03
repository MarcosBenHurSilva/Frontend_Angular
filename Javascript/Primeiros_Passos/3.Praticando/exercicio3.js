/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, 
    considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de 
    pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let preco = 3000;
formaDePagamento = 'pix';
parcelas = 5

console.log('Preço: ' + preco.toFixed(2).replace('.', ','))

if (formaDePagamento.toLowerCase() === 'debito') {
    preco -= preco * 0.1;
    console.log('Preço do pagamento no cartão de débito: R$ ' + preco.toFixed(2).replace('.', ','));
} else if (formaDePagamento.toLowerCase() === 'pix' || formaDePagamento.toLowerCase() === 'dinheiro') {
    preco -= preco * 0.15;
    console.log('Preço do pagamento em ' + formaDePagamento + ': R$ ' + preco.toFixed(2).replace('.', ','));
} else if (formaDePagamento.toLowerCase() === 'parcelado') {
    if (parcelas === 2) {
        console.log('Preço parcelado sem juros: R$ ' + preco.toFixed(2).replace('.', ',') + ' (' + parcelas + 'x de R$ ' + (preco / parcelas).toFixed(2).replace('.', ',') + ')');
    } else if (parcelas > 2) {
        preco += preco * 0.1;
        console.log('Preço parcelado com juros: R$ ' + preco.toFixed(2).replace('.', ',') + ' (' + parcelas + 'x de R$ ' + (preco / parcelas).toFixed(2).replace('.', ',') + ')');
    } else {
        console.log('Número de parcelas inválido.');
    }
} else {
    console.log('Forma de pagamento inválida.');
}
