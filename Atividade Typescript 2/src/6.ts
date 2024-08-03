/* 
    6. Implemente uma classe chamada Carro com as seguintes
    propriedades:

    a. Um veículo tem um certo consumo de combustível (medidos
    em km / litro) e uma certa quantidade de combustível no
    tanque.

    b. O consumo é especificado no construtor e o nível de
    combustível inicial é 0.

    c. Forneça um método andar() que simula o ato de dirigir o
    veículo por uma certa distância, reduzindo o nível de
    combustível no tanque de gasolina.

    d. Forneça um método obterGasolina(), que retorna o nível atual
    de combustível e forneça um método adicionarGasolina(),
    para abastecer o tanque.
*/

import { Carro } from "./class/Carro";

const meuFusca = new Carro(15);

console.log(`Meu fusca tem ${meuFusca.obterGasolina()} litros de gasolina`);


meuFusca.adicionarGasolina(20);

console.log(`Meu fusca tem agora ${meuFusca.obterGasolina()} litros de gasolina`);

console.log(`O Fusca faz ${meuFusca.consumo} km / litro`);

const distanciaPercorrida = meuFusca.andar(100);

const combustivelConsumido = distanciaPercorrida / meuFusca.consumo;
console.log(`Meu fusca andou ${distanciaPercorrida} km e consumiu ${combustivelConsumido.toFixed(2)} litros de gasolina`);

console.log(`Meu fusca tem agora ${meuFusca.obterGasolina().toFixed(2)} litros de gasolina`);
