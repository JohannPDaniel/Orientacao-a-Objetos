/* 
    1. Crie uma função que receba 2 números e retorne um objeto
    contendo a média e também um indicador booleano de
    aprovado/reprovado. Considere aprovado com média >= 6.
*/

function mediaNumeros(a:number, b: number): string {
    const media = (a + b)/2
    if (media >= 6) {
        return `Aprovado`
    }
    return `reprovado`
}

const resultado = mediaNumeros(3,2);

console.log(resultado);


