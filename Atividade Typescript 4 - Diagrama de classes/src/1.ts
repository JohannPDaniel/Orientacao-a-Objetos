/* 
    1. Implemente e teste o modelo de classes com base na seguinte
    imagem:
*/

import { Dataitem, Item } from "./classes/1.ts/Item";
import { DataPedito, Pedido } from "./classes/1.ts/Pedido";

const item1: Dataitem = {
  valor: 25.0,
  nome: "Pizza",
  descricao: "Calabresa",
};

const item2: Dataitem = {
  valor: 26.0,
  nome: "Pizza",
  descricao: "Frango Cheddar",
};

const novoItem = new Item(item1);
console.log(novoItem.getItem);

const pedido1: DataPedito = {
  items: [new Item(item1), new Item(item2)],
};

const novoPedido = new Pedido(pedido1);
console.log(novoPedido.listarPedidos);

const item3: Dataitem = {
  valor: 28.0,
  nome: "Pizza",
  descricao: "Margherita",
};

const item4: Dataitem = {
  valor: 28.0,
  nome: "Pizza",
  descricao: "Quatro queijos",
};

novoPedido.adicionarItem = {
  items: [new Item(item3), new Item(item4)],
};

console.log(novoPedido.listarPedidos);
