import { Pessoa } from "./Pessoa";

export class Membro extends Pessoa {
    private _numeroMembro: number;

    constructor(nome: string, email: string, numeroMembro: number) {
        super(nome, email);
        this._numeroMembro = numeroMembro;
    }
}