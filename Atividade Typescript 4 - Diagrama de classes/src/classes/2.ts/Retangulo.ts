import { FormatoDeElemento } from "./FormatoDeElemento";


export interface DataRetangulo {
    comprimento: number;
    altura: number;
}

export class Retangulo extends FormatoDeElemento {
    comprimento: number;
    altura: number;

    constructor(parametro: DataRetangulo) {
        super()
        this.comprimento = parametro.comprimento;
        this.altura = parametro.altura;
    }

    public desenhar(): void {
        console.log(`Desenhando um retângulo com comprimento: ${this.comprimento} m e altura: ${this.altura} m`);
    }

    public redimensionar():void {
        this.comprimento = this.comprimento * 2;
        this.altura = this.altura * 2;
        console.log(`Redimensionando o retângulo para novo comprimento: ${this.comprimento} m e nova altura: ${this.altura} m`);
    }
}