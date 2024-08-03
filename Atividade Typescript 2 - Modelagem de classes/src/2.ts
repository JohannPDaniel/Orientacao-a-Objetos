/* 
    2. Crie uma classe que modele uma bola:
    a. Atributos
    i. Cor
    ii. Circunferência
    iii. Material
    
    b. Métodos
    i. Trocar Cor
    ii. Mostrar cor
*/

import { Bola } from "./class/Bola";

const bola = new Bola('Futebol', 'Branca', 70, 'Couro');

bola.trocarCor('Vermelho');

console.log(bola.mostrarCor()); 


