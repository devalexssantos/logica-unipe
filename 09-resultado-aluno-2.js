// Função: calcular a média aritmética entre três notas
// mostrar mensagem de aprovado >= 7, recuperação > 3 < 7 ou reprovado < 3

function mostrarResultadoDoAluno(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3;
    let frase = `Média: ${media.toFixed(1).replace('.', ',')} | O aluno está: `
    let resultado;

    let calcularResultado = m => {
        if(m >= 7 && m <= 10) {
            resultado = frase + ' aprovado';
            
        } else if(m < 7 && m > 3) {
            resultado = frase + ' de resuperação';

        } else if(m < 3 && m >= 0){
            resultado = frase + ' reprovado';
        } else {
            resultado = `MÉDIA ${media.toFixed(1).replace('.', ',')}, INVÁLIDA: TENTE NOTAS DE 0 A 10`;
        }

        
    }    
    calcularResultado(media);
    
    return resultado;
}

console.log(mostrarResultadoDoAluno(1, 2, 3));
console.log(mostrarResultadoDoAluno(5, 2.9, 9.9));
console.log(mostrarResultadoDoAluno(10, 8.5, 5.3));
console.log(mostrarResultadoDoAluno(0, 2, -5.3));
console.log(mostrarResultadoDoAluno(11, 23, 10));