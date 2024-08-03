/* 
    1. Crie uma classe Contador, que encapsule um valor usado para
    contagem de itens ou eventos. A classe deve oferecer métodos que
    devem:
    
    a) Zerar;
    b) Incrementar;
    c) Retornar o valor do contador.
*/

import { Contador } from "./class/Contador";

const contador = new Contador();
console.log(contador.getValor()); 

contador.incrementar();
console.log(contador.getValor()); 
contador.zerar();
console.log(contador.getValor());