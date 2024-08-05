import { Ingresso } from "./Ingresso";

export class Normal extends Ingresso {
    constructor(ingresso: Ingresso) {
        super(ingresso.getValorReais());
    }

    getImprimeValor(): string {
        return `O valor do ingresso normal é: R$ ${this.getValorReais().toFixed(2)}`;
    }
}