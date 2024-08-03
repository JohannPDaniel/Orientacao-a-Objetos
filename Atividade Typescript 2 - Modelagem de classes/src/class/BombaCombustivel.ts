export interface Combustivel {
  tipoCombustivel: string;
  valorLitro: number;
  qtdCombustivel: number;
}

export class BombaCombustivel {
  tipoCombustivel: string;
  valorLitro: number;
  qtdCombustivel: number;

  constructor(parametro: Combustivel) {
    this.tipoCombustivel = parametro.tipoCombustivel;
    this.valorLitro = parametro.valorLitro;
    this.qtdCombustivel = parametro.qtdCombustivel;
  }

  abastecerPorValor(valor: number): number | void {
    if (valor <= 0) {
      console.error("O valor deve ser maior que zero.");
      return;
    }

    let qtdLitros = valor / this.valorLitro;

    if (qtdLitros > this.qtdCombustivel) {
      console.error("Não há combustível suficiente na bomba.");
      return;
    }

    this.qtdCombustivel -= qtdLitros;
    return qtdLitros;
  }

  abastecerPorLitro(litros: number): number | void {
    if (litros <= 0) {
      console.error("a quantidade de litros deve ser maior que zero");
      return;
    }

    if (this.qtdCombustivel < litros) {
      console.error("A bomba não tem a quantidade de combustivel suficiente para abastecer.");
      return;
    }

    let valorTotal = litros * this.valorLitro; 
    this.qtdCombustivel -= litros;
    return valorTotal;
  }

  alterarValor(novoValor: number): void {
    if (!novoValor) {
      console.error("O tipo de valor não pode ser vazio.");
      return;
    }
    this.valorLitro = novoValor;
  }

  alterarCombustivel(novoCombustivel: string): void {
    if (!novoCombustivel) {
      console.error("O tipo de combustível não pode ser vazio.");
      return;
    }
    this.tipoCombustivel = novoCombustivel;
  }
}
