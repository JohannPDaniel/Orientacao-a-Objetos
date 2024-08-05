export class Animal {
    private _nome: string;
    private _idade: number;
    private _peso: number;

    constructor(nome: string, idade: number, peso: number) {
        this._nome = nome;
        this._idade = idade;
        this._peso = peso;
    }

    public comer() {
        console.log(`${this._nome} está comendo.`);
    }

    public dormir() {
        console.log(`${this._nome} está dormindo.`);
    }

    public fazerSom() {
        console.log(`${this._nome} está fazendo um som.`);
    }

    public get nome() {
        return this._nome;
    }

    public get idade() {
        return this._idade;
    }

    public get peso() {
        return this._peso;
    }
    
    public set setNome(nome : string) {
        this._nome = nome;
    }

    public set setIdade(idade : number) {
        this._idade = idade;
    }

    public set setPeso(peso : number) {
        this._peso = peso;
    }
}