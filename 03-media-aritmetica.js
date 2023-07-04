//Faça um algoritmo para calcular a média aritmética entre duas notas de um aluno e mostrar sua situação, sendo este aluno aprovador ou reprovado.
let nota1 = 7;
let nota2 = 9;

let media = (nota1 + nota2) / 2;
let resultado;
if(media < 7) {
    resultado = 'reprovado';
} else {
    resultado = 'aprovado';
}

console.log(`Sua média foi ${media}, e você está ${resultado}.`);