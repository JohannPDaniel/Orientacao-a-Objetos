import { randomUUID } from "crypto";
import { Livro } from "./Livro";
import { Membro } from "./Membro";

export class Locacao {
    private _idLocacao: string;
    private _dataInicio: any;
    private _dataFim: any;
    private _status: string;
    private _livro: Livro[];
    private _membro: Membro[]

    constructor(dataInicio: any, dataFim: any, status: string, livro: Livro[], membro: Membro[]) {
        this._idLocacao = randomUUID();
        this._dataInicio = dataInicio;
        this._dataFim = dataFim;
        this._status = status;
        this._livro = livro;
        this._membro = membro;
    }
}