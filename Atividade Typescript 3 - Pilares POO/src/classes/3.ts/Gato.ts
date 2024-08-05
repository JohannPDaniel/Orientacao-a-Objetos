import { Animal } from "./Animal";

export class Gato extends Animal {
    constructor(nome: string, idade: number, peso: number) {
        super(nome, idade, peso)
    }

    public apresentarAnimal() {
        console.log(`${super.nome} tem ${super.idade} anos e pesa ${super.peso} quilos.`);
    }

    public fazerSom() {
        console.log(`${super.nome} está miando`);
    }

    public arranhar() {
        console.log(`${this.nome} está arranhando.`)
    }
}