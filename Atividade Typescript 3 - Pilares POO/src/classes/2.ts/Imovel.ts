export class Imovel {
    private _endereco: string;
    private _preco: number;

    constructor(endereco: string, preco: number) {
        this._endereco = endereco;
        this._preco = preco;        
    }
    
    get getEndereco(): string {
        return this._endereco;
    }

    get getPreco(): number {
        return this._preco;
    }

    set setEndereco(endereco: string) {
        this._endereco = endereco;
    }

    set setPreco(preco: number) {
        this._preco = preco;
    }
    
    imprimeDetalhes(): void {
        console.log(`Endereço: ${this.getEndereco}, Preço: R$ ${this.getPreco.toFixed(2)}`);
    }
}
