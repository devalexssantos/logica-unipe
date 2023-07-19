/*
Faça um algoritmo para calcular o valor do imposto e o valor do
desconto de um salário. Sabe-se que o imposto de é 7% e o desconto é de 5%, em
que cada operação deve ser realizada em um sub-rotina apropriada
*/

const calcularValorImpostoSobreSalario = r => r * 0.07;

const calcularValorDoDesconto = r => r * 0.05;


function calcularSalarioLiquido(remuneracao) {

    const IMPOSTO = calcularValorImpostoSobreSalario(remuneracao);
    const DESCONTO = calcularValorDoDesconto(remuneracao);

    const SALARIO_LIQUIDO = remuneracao - IMPOSTO - DESCONTO;

    return SALARIO_LIQUIDO.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

console.log(calcularSalarioLiquido(1320));
console.log(calcularSalarioLiquido(5320.33));