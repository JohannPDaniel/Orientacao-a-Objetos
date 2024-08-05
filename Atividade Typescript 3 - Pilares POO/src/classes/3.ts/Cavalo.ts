import { Animal } from "./Animal";

export class Cavalo extends Animal {
    constructor(nome: string, idade: number, peso: number) {
        super(nome, idade, peso)
    }

    public apresentarAnimal() {
        console.log(`${super.nome} tem ${super.idade} anos e pesa ${super.peso} quilos.`);
    }

    public fazerSom() {
        console.log(`${super.nome} está relinchando`);
    }

    public galopar() {
        console.log(`${this.nome} está galopando.`)
    }
}