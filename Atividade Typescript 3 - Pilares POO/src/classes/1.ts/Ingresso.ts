export class Ingresso {
    private _valorReais: number;

    constructor(valorReais: number) {
        this._valorReais = valorReais;
    }

    private imprimeValor(): string {
        return `Valor do ingresso: R$ ${this._valorReais.toFixed(2)}`;
    }

    public getValorReais(): number {
        return this._valorReais;
    }

    public getImprimeValor(): string {
        return this.imprimeValor();
    }
}

