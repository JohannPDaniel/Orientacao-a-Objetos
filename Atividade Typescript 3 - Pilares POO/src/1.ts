/* 
    1. Crie uma classe abstrata chamada Ingresso que possui um valor
    em reais e um método imprimeValor()

    a. crie uma classe Normal, que herda Ingresso..

    b. crie uma classe VIP, que herda Ingresso e possui um valor
    adicional. Altere o método imprimeValor para mostrar o valor
    do ingresso somado com o adicional.

    c. crie uma classe Camarote, que herda ingresso e possui um
    valor adicional. Altere o método imprimeValor para mostrar o
    valor do ingresso somado com o adicional.
*/

import { Ingresso } from "./classes/1.ts/Ingresso";
import { Normal } from "./classes/1.ts/Normal";
import { Vip } from "./classes/1.ts/Vip";
import { Camarote } from "./classes/1.ts/Camarote";

const ingresso = new Ingresso(5);
const ingressoNormal = new Normal(ingresso);
const ingressoVip = new Vip(ingresso, 10);
const ingressoCamarote = new Camarote(ingresso, 20);

console.log(ingresso.getImprimeValor());
console.log(ingressoNormal.getImprimeValor());
console.log(ingressoVip.getImprimeValor());
console.log(ingressoCamarote.getImprimeValor());

