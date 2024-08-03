/* 
    5. Faça um programa completo utilizando classes e métodos que:
    
    a. Possua uma classe chamada BombaCombustivel, com no
    mínimo esses atributos:
    
    i. tipoCombustivel.
    ii. valorLitro
    iii. quantidadeCombustivel

    b. Possua no mínimo esses métodos:
    
    i. abastecerPorValor() – método onde é informado o
    valor a ser abastecido e mostra a quantidade de litros
    que foi colocada no veículo

    ii. abastecerPorLitro() – método onde é informado a
    quantidade em litros de combustível e mostra o valor a
    ser pago pelo cliente.

    iii. alterarValor() – altera o valor do litro do combustível.

    iv. alterarCombustivel() – altera o tipo do combustível.
    v. alterarQuantidadeCombustivel() – altera a
    quantidade de combustível restante na bomba.
*/

import { BombaCombustivel, Combustivel } from "./class/BombaCombustivel";

const parametroCombustivel: Combustivel = {
  tipoCombustivel: "Gasolina",
  valorLitro: 5.5,
  qtdCombustivel: 60
};

const Bomba = new BombaCombustivel(parametroCombustivel);

console.log("");
console.log("--------------- Gasolina ----------------");
console.log("");
console.log(`Combustível: ${Bomba.tipoCombustivel}, Valor: R$ ${Bomba.valorLitro.toFixed(2)}, Quantidade: ${Bomba.qtdCombustivel.toFixed(2)}`);

console.log("");
console.log("--------------- Mudando o Combustível para Álcool ----------------");
console.log("");
Bomba.alterarCombustivel("Alcool");
console.log(`Combustível alterado para: ${Bomba.tipoCombustivel}`);

console.log("");
console.log("--------------- Mudando o valor do combustível ----------------");
console.log("");
Bomba.alterarValor(3);
console.log(`Valor do combustível alterado para: R$ ${Bomba.valorLitro.toFixed(2)}`);

console.log("");
console.log("--------------- Abastecendo por valor ----------------");
console.log("");

const litrosAbastecidosPorValor = Bomba.abastecerPorValor(30);
console.log(`Litros abastecidos: ${litrosAbastecidosPorValor?.toFixed(2)} Litros`);
console.log("");

console.log(`Combustível: ${Bomba.tipoCombustivel}, Valor: R$ ${Bomba.valorLitro.toFixed(2)}, Quantidade: ${Bomba.qtdCombustivel.toFixed(2)}`);
console.log("");

console.log("--------------- Abastecendo por litros ----------------");
console.log("");
const valorTotalPorLitros = Bomba.abastecerPorLitro(6);
console.log(`Valor total: R$ ${valorTotalPorLitros?.toFixed(2)}`);
console.log("");

console.log(`Combustível: ${Bomba.tipoCombustivel}, Valor: R$ ${Bomba.valorLitro.toFixed(2)}, Quantidade: ${Bomba.qtdCombustivel.toFixed(2)}`);
