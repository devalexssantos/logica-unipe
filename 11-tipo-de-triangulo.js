/*
Faça um algoritmo que receba os três lados de um triângulo e
mostre sua classificação conforme regras abaixo:
• triângulo escaleno: três lados diferentes;
• triângulo isósceles: dois lados iguais;
• triângulo equilátero: três lados iguais.
*/

function verificarTipoDeTriangulo(l1, l2, l3) {

    
    let resultado;

    

    let retornarTipoTriangulo = (l1, l2, l3) => {

        let tipoDeTriangulo;
          
        if(l1 !== l2 && l1 !== l3 && l2 !== l3) { 

            tipoDeTriangulo = 'ESCALENO'

        } else if(l1 === l2 && l1 === l3) {

            tipoDeTriangulo =  'EQUILÁTERO';

        } else {

            tipoDeTriangulo = 'ISÓCELES'

        }

        

        return tipoDeTriangulo;
    }

    resultado = retornarTipoTriangulo(l1, l2, l3);



    return `O triângulo é: ${resultado}`;


}

console.log(verificarTipoDeTriangulo(1, 2, 3));
console.log(verificarTipoDeTriangulo(5, 5, 5));
console.log(verificarTipoDeTriangulo(5, 5, 3));