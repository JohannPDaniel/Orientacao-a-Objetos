/* 
    4. Crie uma classe para representar uma Calculadora. Esta classe
    deve conter um atributo que servirá para armazenar o histórico das
    operações e seus respectivos resultados.
    
    a. Esta classe deve conter as operações de somar, multiplicar,
    dividir e diminuir.
    b. Esta classe deve iniciar com o histórico vazio
    c. Esta classe deve conter uma ação para visualizar o histórico.
*/

import { Calculadora } from "./class/Calculadora";

const calculadora = new Calculadora();

const soma = calculadora.somar(10, 5);
console.log(`Soma: ${soma}`);

const subtracao = calculadora.subtrair(10, 5);
console.log(`Subtração: ${subtracao}`);

const multiplicacao = calculadora.multiplicar(10, 5);
console.log(`Multiplicação: ${multiplicacao}`);

try {
  const divisao = calculadora.dividir(10, 0);
  console.log(`Divisão: ${divisao}`); 
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message); 
  } else {
    console.log("Erro desconhecido", error);
  }
}
console.log("Histórico de operações:", calculadora.exibirHistorico());
