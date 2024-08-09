import { Livro } from "./Livro";
import { Locacao } from "./Locacao";
import { Membro } from "./Membro";

export class Biblioteca {
    private _livro: Livro[] = [];
    private _membros: Membro[] = [];
    private _locacoes: Locacao[] = [];
    private _contadorIdLocacao: number = 1;

    constructor(livro: Livro[], membros: Membro[], locacoes: Locacao[]) {
        this._livro = livro;
        this._membros = membros;
        this._locacoes = locacoes;
    }

    public adicionarLivro(livro: Livro): void {
        this._livro.push(livro);
    }

    public registrarMembro(membro: Membro): void {
        this._membros.push(membro);
    }

    public alugarLivro(livro: Livro, membro: Membro): Locacao {
        if (!livro._disponivel) {
            throw new Error("Livro não está disponível para aluguel.");
          }
          livro._disponivel = false;
          const locacao = new Locacao(this._contadorIdLocacao++, livro, membro, new Date()); // Incrementa o contador
          this._locacoes.push(locacao);
          return locacao;
    }

    public devolverLivro(): void {
        
    }
}