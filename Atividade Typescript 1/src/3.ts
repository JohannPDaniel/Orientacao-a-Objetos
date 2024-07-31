/* 
    3. Crie um programa que simule uma carteira de dinheiro. Este
    programa vai precisar ter uma carteira contendo saldo, transações
    de entrada e saídas. Ou seja, será um objeto com estas
    propriedades. Depois crie uma função para lançar uma entrada e
    uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
    um erro ou avisar.
*/

import { Carteira } from "./types/Types";

function criarCarteira(): Carteira {
    return {
        saldo: 0,
        transacoes: []
    };
}

function adicionarEntrada(carteira: Carteira, valor: number): void {
    if (valor <= 0) {
        console.error("O valor de entrada deve ser positivo.");
        return;
    }
    carteira.saldo += valor;
    carteira.transacoes.push(`Entrada de R$${valor}`);
    console.log(`Entrada de R$${valor} adicionada com sucesso. Saldo atual: R$${carteira.saldo.toFixed(2)}`);
}

function adicionarSaida(carteira: Carteira, valor: number): void {
    if (valor <= 0) {
        console.error("O valor de saída deve ser positivo.");
        return;
    }
    if (carteira.saldo >= valor) {
        carteira.saldo -= valor;
        carteira.transacoes.push(`Saída de R$${valor}`);
        console.log(`Saída de R$${valor} realizada com sucesso. Saldo atual: R$${carteira.saldo.toFixed(2)}`);
    } else {
        console.error("Saldo insuficiente para realizar esta saída.");
    }
}

const minhaCarteira = criarCarteira();
adicionarEntrada(minhaCarteira, 1000); 
adicionarSaida(minhaCarteira, 300);    
adicionarSaida(minhaCarteira, 400);    

console.log("Saldo final: R$", minhaCarteira.saldo.toFixed(2));
console.log("Transações:", minhaCarteira.transacoes);
