export class Conta {
    numero: number;
    nome: string;
    saldo: number;
  
    constructor(numero: number, nome: string, saldo: number = 0) {
      this.numero = numero;
      this.nome = nome;
      this.saldo = saldo;
    }
  
    alterarNome(nome: string): void {
      this.nome = nome;
    }
  
    fazerDeposito(dinheiro: number): void {
      this.saldo += dinheiro;
    }
  
    fazerSaque(dinheiro: number): void {
      if (this.saldo >= dinheiro) {
        this.saldo -= dinheiro;
      } else {
        console.log("Saldo insuficiente para saque.");
      }
    }
  
    mostrarSaldo(): number {
      return this.saldo;
    }
  }
  