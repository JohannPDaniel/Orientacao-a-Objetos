import { Media } from "./interfaces/interfaces";

function calcularMediaPonderada(notasPesos: Media[]): number {
    let somaNotasPesos = 0;
    let somaPesos = 0;

    for (const np of notasPesos) {
        somaNotasPesos += (np.nota1 * np.peso1) + (np.nota2 * np.peso2);
        somaPesos += np.peso1 + np.peso2;
    }

    return somaNotasPesos / somaPesos;
}

const medias1: Media[] = [
    { nota1: 6, nota2: 3, peso1: 2, peso2: 3 },
    { nota1: 4, nota2: 10, peso1: 2, peso2: 3 },
];

const medias2: Media[] = [
    { nota1: 8, nota2: 5, peso1: 2, peso2: 3 },
    { nota1: 8, nota2: 5, peso1: 2, peso2: 3 },
    { nota1: 8, nota2: 5, peso1: 2, peso2: 3 },
];

const resultado1 = calcularMediaPonderada(medias1);
const resultado2 = calcularMediaPonderada(medias2);
console.log(resultado1);  
console.log(resultado2);  