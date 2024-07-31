/* 
    7. Crie um tipo que seja composto por um User OU por um Diretor
    usando interseção de tipos. Desenvolva uma função que receba
    uma lista desse novo tipo e, para cada item da lista, imprima:
    
    a. O mesmo que o exercício 5, em caso de objeto User.
    b. O mesmo que o exercício 6, em caso de objeto Diretor.
*/

import { Diretor, Usuario } from "./types/Types";

type UserOrDiretor = Usuario | Diretor;

function mostrarLista(lista: UserOrDiretor[]): string {
    let mensagens: string[] = [];
    lista.forEach(item => {
        if ('ocupacao' in item) {
            mensagens.push(`O mesmo que o exercício 5, em caso de objeto User`);
        } else if ('comissao' in item) {
            mensagens.push(`O mesmo que o exercício 6, em caso de objeto Diretor`);
        }
    });
    return mensagens.join('\n');
}

const lista: UserOrDiretor[] = [
    { nome: "João", idade: 30, ocupacao: "Desenvolvedor", salario: 3000 },
    { nome: "Maria", idade: 45, comissao: 3, salario: 5000 },
];

const resultado = mostrarLista(lista);
console.log(resultado);
