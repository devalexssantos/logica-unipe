// Função: receber dois números e mostrar o maior

function verificarQuemEMaior(num1, num2) {
    let resultado;
    if(num1 > num2) {
        resultado = `O número ${num1} é maior que o número ${num2}`;
    } else if(num2 > num1) {
        resultado = `O número ${num2} é maior que o número ${num1}`;
    } else {
        resultado = `Os números ${num1} e ${num2} são iguais`;
    }

    return resultado;
}

console.log(verificarQuemEMaior(12654, 123));
console.log(verificarQuemEMaior(14, 123));
console.log(verificarQuemEMaior(14, 14));