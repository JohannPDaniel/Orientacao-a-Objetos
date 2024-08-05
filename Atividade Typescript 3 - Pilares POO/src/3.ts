/* 
    3. Dado o seguinte diagrama:

              Animal
                |
                |
    --------------------------
    |           |            |
    |           |            |
    Cachorro    Cavalo       Gato

    Identifique os atributos e comportamentos que são comuns entre os
    3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
    comportamento diferente para cada animal.
*/

import { Cachorro } from "./classes/3.ts/Cachorro";
import { Cavalo } from "./classes/3.ts/Cavalo";
import { Gato } from "./classes/3.ts/Gato";

const cachorro = new Cachorro("Pateta", 2, 10);
const gato = new Gato("Pelucio", 3, 7)
const cavalo = new Cavalo("Pé de Pano", 4, 100)

console.log("");
console.log("------------ Cachorro --------------");
console.log("");

cachorro.apresentarAnimal()
cachorro.setNome = "Panceta"
cachorro.setIdade = 1
cachorro.setPeso = 5
cachorro.apresentarAnimal()

cachorro.comer()
cachorro.dormir()
cachorro.fazerSom()
cachorro.abanarRabo()

console.log("");
console.log("------------ Gato --------------");
console.log("");

gato.apresentarAnimal()
gato.setNome = "Migucho"
gato.setIdade = 5
gato.setPeso = 12
gato.apresentarAnimal()

gato.comer()
gato.dormir()
gato.fazerSom()
gato.arranhar()

console.log("");
console.log("------------ Cavalo --------------");
console.log("");

cavalo.apresentarAnimal()
cavalo.setNome = "Pocotó"
cavalo.setIdade = 7
cavalo.setPeso = 120
cavalo.apresentarAnimal()

cavalo.comer()
cavalo.dormir()
cavalo.fazerSom()
cavalo.galopar()