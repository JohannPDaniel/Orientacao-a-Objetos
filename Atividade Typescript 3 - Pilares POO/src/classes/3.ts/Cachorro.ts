import { Animal } from "./Animal";

export class Cachorro extends Animal {
    constructor(nome: string, idade: number, peso: number) {
        super(nome, idade, peso)
    }

    public apresentarAnimal() {
        console.log(`${super.nome} tem ${super.idade} anos e pesa ${super.peso} quilos.`);
    }

    public fazerSom() {
        console.log(`${super.nome} está latindo`);
    }

    public abanarRabo() {
        console.log(`${this.nome} está abanando o rabo.`)
    }
}