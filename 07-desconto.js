//Faça um algoritmo para calcular o novo preço de um produto, sabendo que o percentual de desconto será informado pelo usuário.

let percentualDeDesconto;

function calcularDesconto(preco, percentual) {
    let novoValorDoProduto = preco - (preco * percentual) / 100;

    return novoValorDoProduto;
}

percentualDeDesconto = 10;

console.log(calcularDesconto(100.59, percentualDeDesconto).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));

percentualDeDesconto = 30;
console.log(calcularDesconto(573.99, percentualDeDesconto).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));