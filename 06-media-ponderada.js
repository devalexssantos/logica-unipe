//Faça um algoritmo para calcular a média ponderada entre duas notas, cujos pesos são 2 e 3.

function calcularMediaPonderada(nota1, nota2) {
    media = ((nota1 * 2) + (nota2 * 3)) / 5;

    return `Média ponderada: ${media}`;
}

console.log(calcularMediaPonderada(10, 10));
console.log(calcularMediaPonderada(8, 3));