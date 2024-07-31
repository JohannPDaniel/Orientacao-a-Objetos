/* 
    3. Crie uma classe para implementar uma conta corrente. A classe
    deve possuir os seguintes atributos:
    a. Número da conta
    b. Nome do correntista
    c. Saldo
    
    Os métodos são os seguintes:
    a) Alterar nome
    b) Deposito
    c) Saque
    
    No construtor, o saldo é opcional, com valor padrão zero e os
    demais atributos são obrigatórios. A conta não pode ficar com saldo
    negativo.
*/

import { Conta } from "./class/Conta";

const minhaConta = new Conta(12345, "João Silva", 1000);

console.log(`Saldo inicial: ${minhaConta.mostrarSaldo()}`); 

minhaConta.alterarNome("Johann Patricio Daniel");
console.log(`Nome da conta: ${minhaConta.nome}`);

minhaConta.fazerDeposito(500);
console.log(`Saldo após depósito: ${minhaConta.mostrarSaldo()}`); 

minhaConta.fazerSaque(300);
console.log(`Saldo após saque: ${minhaConta.mostrarSaldo()}`); 

minhaConta.fazerSaque(2000); 
console.log(`Saldo final: ${minhaConta.mostrarSaldo()}`); 

