import { Imovel } from "./Imovel";

export class Novo extends Imovel {
    private _adicionalPreco: number;

    constructor(endereco: string, preco: number, adicionalPreco: number) {
        super(endereco, preco);
        this._adicionalPreco = adicionalPreco;
    }

    get getAdicionalPreco(): number {
        return this._adicionalPreco;
    }

    set setAdicionalPreco(adicionalPreco: number) {
        this._adicionalPreco = adicionalPreco;
    }

    imprimeValorAdicional(): void {
        console.log(`Adicional no Preço: R$ ${this.getAdicionalPreco.toFixed(2)}`);
        const precoTotal = this.getPreco + this.getAdicionalPreco;
        console.log(`Preço Adicionado: R$ ${this.getPreco.toFixed(2)} + R$ ${this.getAdicionalPreco.toFixed(2)} = R$ ${precoTotal.toFixed(2)}`);
    }
}
