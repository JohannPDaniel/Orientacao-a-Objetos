import { Imovel } from "./Imovel";

export class Velho extends Imovel {
    private _descontoPreco: number;

    constructor(endereco: string, preco: number, descontoPreco: number) {
        super(endereco, preco);
        this._descontoPreco = descontoPreco;
    }

    get getDescontoPreco(): number {
        return this._descontoPreco;
    }

    set setDescontoPreco(descontoPreco: number) {
        this._descontoPreco = descontoPreco;
    }

    imprimeDesconto(): void {
        console.log(`Desconto no Preço: R$ ${this.getDescontoPreco.toFixed(2)}`);
        const precoDescontado = this.getPreco - this.getDescontoPreco;
        console.log(`Preço Descontado: R$ ${this.getPreco.toFixed(2)} - R$ ${this.getDescontoPreco.toFixed(2)} = R$ ${precoDescontado.toFixed(2)}`);
    }
}
