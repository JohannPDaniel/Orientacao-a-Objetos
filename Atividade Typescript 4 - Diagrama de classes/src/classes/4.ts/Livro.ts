import { Item } from "./Item";

export class Livro extends Item {
    private _autor: string;
    private _isbn: string;

    constructor(titulo: string, disponivel: boolean = true, autor: string, isbn: string) {
        super(titulo, disponivel);
        this._autor = autor;
        this._isbn = isbn;
    }
}