/* 
    2. Crie a classe Imovel, que possui um endereço e um preço.

    a. crie uma classe Novo, que herda Imovel e possui um adicional
    no preço. Crie métodos de acesso e impressão deste valor
    adicional.

    b. crie uma classe Velho, que herda Imovel e possui um desconto
    no preço. Crie métodos de acesso e impressão para este
    desconto.
*/

import { Novo } from "./classes/2.ts/Novo";
import { Velho } from "./classes/2.ts/Velho";

const imovelNovo = new Novo("Avenida dos fulanos", 40, 0);
const imovelVelho = new Velho("Avenida Dr. Bento Quirino", 60, 0);

console.log("");
console.log("-------------- Detalhes dos imóveis ----------------");
console.log("");

imovelNovo.imprimeDetalhes();
imovelVelho.imprimeDetalhes();

console.log("");
console.log("-------------- Detalhes dos imóveis mudados ----------------");
console.log("");

imovelNovo.setPreco = 20;
imovelNovo.setEndereco = "Rua dos coitados";
imovelNovo.imprimeDetalhes();

imovelVelho.setPreco = 30;
imovelVelho.setEndereco = "Rua dos alfeneiros";
imovelVelho.imprimeDetalhes();

console.log("");
console.log("----------- Valor adicional e descontado ------------");
console.log("");

imovelNovo.imprimeValorAdicional();
console.log("-------------------------------------------------------");
imovelVelho.imprimeDesconto();

console.log("");
console.log("----------- Mudar valor adicional e descontado ------------");
console.log("");

imovelNovo.setAdicionalPreco = 30;
imovelNovo.imprimeValorAdicional();
imovelVelho.setDescontoPreco = 30;
imovelVelho.imprimeDesconto();
