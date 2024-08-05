import { Ingresso } from "./Ingresso";

export class Vip extends Ingresso {
    private _valorAdicional: number;

    constructor(ingresso: Ingresso, valorAdicional: number) {
        super(ingresso.getValorReais());
        this._valorAdicional = valorAdicional
    }

    public getImprimeValor(): string {
        const valorTotal = this.getValorReais() + this._valorAdicional;
        return `O Valor do ingresso VIP: R$ ${valorTotal.toFixed(2)}`;
    } 
}