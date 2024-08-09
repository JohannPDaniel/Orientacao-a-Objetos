/* 
    2. Implemente e teste o modelo de classes com base no seguinte
    imagem:

                                |------------------------|
                 |------------->|    FormatoDeElemento   |<------------|
                 |              |------------------------|             |
                 |              |+ desenhar(): void      |             |
             Implements         |+ redimensionar(): void |         Implements
                 |              |------------------------|             |
                 |                                                     |
     |------------------------|                              |------------------------|                     
     |        Circulo         |                              |        Retangulo       |
     |------------------------|                              |------------------------|
     |+ raio: number          |                              |+ comprimento: number   |
     |------------------------|                              |+ altura: number        |
     |+ desenhar(): void      |                              |------------------------|
     |+ redimensionar(): void |                              |+ desenhar(): void      |
     |------------------------|                              |+ redimensionar(): void |
                                                             |------------------------|
*/

import { Circulo, DataCirculo } from "./classes/2.ts/Circulo"
import { DataRetangulo, Retangulo } from "./classes/2.ts/Retangulo"

const dataCirculo: DataCirculo = {
    raio: 5.3
}

const dataRetangulo: DataRetangulo = {
    comprimento: 7.32,
    altura: 4.86
}

const circulo = new Circulo(dataCirculo)

circulo.desenhar()
circulo.redimensionar()
circulo.desenhar()

console.log("-----------------------------------");

const retagulo = new Retangulo(dataRetangulo)

retagulo.desenhar()
retagulo.redimensionar()
retagulo.desenhar()