//Faça um algoritmo para calcular o novo salário de um funcionário. Sabe-se que os funcionários que recebem salário até R$500,00 terão aumento de 20%; os demais terão aumento de 10%
let salario = 1000;

let valorAumento;
let novoSalario;
if(salario <= 500) {
    valorAumento = (salario * 10) / 100;
} else {
    valorAumento = (salario * 20) / 100;
}

novoSalario = salario + valorAumento;

console.log(`O seu novo salário é: ${novoSalario}`);