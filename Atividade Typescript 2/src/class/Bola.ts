export class Bola {
    Atributos: string;
    Cor: string;
    Circunferência: number;
    Material: string

    constructor(atributos: string, cor: string, circunferência: number, material: string) {
        this.Atributos = atributos;
        this.Cor = cor;
        this.Circunferência = circunferência;
        this.Material = material;
    }

    trocarCor(cor: string) {
        this.Cor = cor
    }

    mostrarCor(){
        return this.Cor
    }
}