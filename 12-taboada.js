//Faça um algoritmo para receber um número e apresentar a tabuada do mesmo usando estruturas de repetição


function mostrarTaboada(num) {
    let resultado = '';

    for (let i = 0; i <= 10; i++) {

        resultado += `${num} x ${i} = ${num * i}
       `;                
    }

    return resultado;
}

console.log(mostrarTaboada(1));
console.log(mostrarTaboada(10));