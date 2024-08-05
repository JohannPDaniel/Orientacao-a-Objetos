import { Ingresso } from "./Ingresso";

export class Camarote extends Ingresso {
    private _valorAdicional: number;

    constructor(ingresso: Ingresso, valorAdicional: number) {
        super(ingresso.getValorReais());
        this._valorAdicional = valorAdicional;
    }

    public getImprimeValor(): string {
        const valorTotal = this.getValorReais() + this._valorAdicional;
        return `O Valor do ingresso Camarote: R$ ${valorTotal.toFixed(2)}`;
    } 
}