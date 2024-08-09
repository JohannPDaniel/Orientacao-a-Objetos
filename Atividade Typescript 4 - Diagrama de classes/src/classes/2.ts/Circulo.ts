import { FormatoDeElemento } from "./FormatoDeElemento";

export interface DataCirculo {
    raio: number;
}

export class Circulo extends FormatoDeElemento {
    raio: number;

    constructor(parametro: DataCirculo) {
        super()
        this.raio = parametro.raio;
    }

    public desenhar(): void {
        console.log(`Desenhando um círculo com raio: ${this.raio} m`);
    }

    public redimensionar():void {
        this.raio = this.raio * 2;
        console.log(`Redimensionando o círculo para novo raio: ${this.raio} m`);
    }
}