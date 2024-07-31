/* 
    4. Crie um programa para cadastrar, listar e excluir produtos de uma
    lista com tipagem de Produto.
*/

import { Produto } from "./types/Types";

let lista: Produto[] = [];

// Cadastrar Produto
function cadastrarProduto(produto: Produto): void {
    lista.push(produto);
}

// Listar Produto
function listarProduto(): Produto[] {
    return lista;
}

// Deletar Produto
function deletarProduto(id: number): void {
    const index = lista.findIndex(produto => produto.id === id)
    if (index !== -1) {
        lista.splice(index, 1)
    }
}

const produtoUm: Produto = { id: 1, nome: "Arroz", quantidade: 20 };
const produtoDois: Produto = { id: 2, nome: "Feijão", quantidade: 30 };

cadastrarProduto(produtoUm);
cadastrarProduto(produtoDois)
console.log(listarProduto());

deletarProduto(1)
deletarProduto(2)

console.log(listarProduto());
