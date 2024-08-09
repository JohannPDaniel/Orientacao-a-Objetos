import { Item } from "./Item";

export interface DataPedito {
  items: Item[];
  valorTotal?: number;
}

export class Pedido {
  items: Item[];
  valorTotal: number;

  constructor(parametro: DataPedito) {
    this.items = parametro.items;
    this.valorTotal = 0; 
    this.somarValor();
  }

  public set adicionarItem(parametro: DataPedito) {
    if (parametro.items.length === 0) {
      throw new Error("Não existe itens no pedido");
    }
    this.items.push(...parametro.items);
    this.somarValor();
  }

  private somarValor() {
    this.valorTotal = this.items.reduce((total, item) => total + item.valor, 0);
  }

  public get listarPedidos() {
    const dataPedido: DataPedito = {
      items: this.items,
      valorTotal: this.valorTotal,
    };

    const respostaGet = {
      items: dataPedido.items.map(item => `${item.nome} de ${item.descricao}`),
      valorTotal: `R$ ${dataPedido.valorTotal?.toFixed(2) || '0.00'}` 
    };

    return respostaGet;
  }
}
