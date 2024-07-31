export class Calculadora {
  historico: number[];

  constructor(historico: number[] = []) {
    this.historico = historico;
  }

  adicionarHistorico(resultado: number): void {
    this.historico.push(resultado);
  }

  somar(a: number, b: number): number {
    const resultado = a + b;
    this.adicionarHistorico(resultado);
    return resultado;
  }

  multiplicar(a: number, b: number): number {
    const resultado = a * b;
    this.adicionarHistorico(resultado);
    return resultado;
  }

  dividir(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }

    const resultado = a / b;
    this.adicionarHistorico(parseFloat(resultado.toFixed(2))); 
    return resultado;
  }

  subtrair(a: number, b: number): number {
    const resultado = a - b;
    this.adicionarHistorico(resultado);
    return resultado;
  }

  exibirHistorico(): number[] {
    return this.historico;
  }
}
