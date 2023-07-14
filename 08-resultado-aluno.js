// Função: calcular a média aritmética entre duas notas
// mostrar mensagem de aprovado ou reprovado


function retornarResultadoDoAluno(n1, n2) {
    let media = (n1 + n2) / 2;

    let resultado = m => m >= 7 ? 'aprovado' : 'reprovado';

    return `Média: ${media.toFixed(1).replace('.', ',')} | O aluno está: ${resultado(media)}.`
}

console.log(retornarResultadoDoAluno(5, 7));
console.log(retornarResultadoDoAluno(8, 9.7));