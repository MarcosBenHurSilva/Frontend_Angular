// Dados do produto
const precoNormal = 100; // Preço normal de etiqueta
const codigoPagamento = 2; // Código de condição de pagamento (1 a 4)

// Variável para armazenar o valor a ser pago
let valorFinal;

// Condições de pagamento
switch (codigoPagamento) {
    case 1:
        valorFinal = precoNormal * 0.90; // À vista Débito, 10% de desconto
        break;
    case 2:
        valorFinal = precoNormal * 0.85; // À vista Dinheiro ou PIX, 15% de desconto
        break;
    case 3:
        valorFinal = precoNormal; // Em duas vezes, preço normal sem juros
        break;
    case 4:
        valorFinal = precoNormal * 1.10; // Acima de duas vezes, preço normal mais 10% de juros
        break;
    default:
        console.log('Código de pagamento inválido.');
}

// Exibição do resultado
if (valorFinal !== undefined) {
    console.log('Valor a ser pago: R$ ' + valorFinal.toFixed(2).replace('.', ','));
}