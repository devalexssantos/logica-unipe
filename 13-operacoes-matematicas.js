//Faça um algoritmo para calcular as quatro operações básicas entre dois números, em que cada operação deve ser realizada em um sub-rotina apropriada.

const SOMAR = (a, b) => a + b;
const SUBTRAIR = (a, b) => a - b;
const MULTIPLICAR = (a, b) => a * b;
const DIVIDIR = (a, b) => a / b;


function main(n1, n2) {

    return `Soma: ${SOMAR(n1, n2)} | Subtração: ${SUBTRAIR(n1, n2)} | Multiplicação:  ${MULTIPLICAR(n1, n2)} | Divisão:  ${DIVIDIR(n1, n2)}`;

}

console.log(main(1, 2));
console.log(main(185.23, 99.5));
console.log(main(2, 2));