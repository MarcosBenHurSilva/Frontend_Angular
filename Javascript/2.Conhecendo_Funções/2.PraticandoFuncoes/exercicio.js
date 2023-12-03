function escrevaMeuNome(nome){
    return `Seu nome é ${nome}`;
}

function verificarIdade(idade){
    if(idade >= 18){
        console.log(escrevaMeuNome('Marcos') + ', você é maior de idade.')
    } else {
        console.log(escrevaMeuNome('Tobi') + ', você é menor de idade.')
    }
}

function jurosComFuncoes(preco, formaDePagamento, parcelas){
    console.log('Preço: ' + preco.toFixed(2).replace('.', ','))

    if (formaDePagamento === 1) {
        preco -= preco * 0.1;
        console.log('Preço do pagamento no cartão de débito: R$ ' + preco.toFixed(2).replace('.', ','));
    } else if (formaDePagamento === 2 || formaDePagamento === 3) {
        preco -= preco * 0.15;
        console.log('Preço do pagamento em dinheiro/pix: R$ ' + preco.toFixed(2).replace('.', ','));
    } else if (formaDePagamento === 4) {
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
}

(function(){
    console.log(escrevaMeuNome('Marcos'));
    console.log(escrevaMeuNome('Tobi'));
    console.log('----------------------');
    verificarIdade(31);
    verificarIdade(6);
    console.log('----------------------');
    jurosComFuncoes(3000, 4, 5);
})();
