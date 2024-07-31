/* 
    5. Crie um programa para mostrar informações de usuários (User) de
    uma empresa. Crie o tipo User com as seguintes propriedades:
    nome, idade, ocupação e salário (opcional). Caso o salário do
    usuário não seja informado, mostre o valor “N/A”. Exemplo:
    
    a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
    b. “Daphne, 23 anos, analista de TI, salário N/A”
*/

import { Usuario } from "./types/Types";

export function mostrarUsuario(usuario: Usuario): string {
  const pessoa = {
    nome: usuario.nome,
    idade: usuario.idade,
    ocupacao: usuario.ocupacao,
  };

  const salario =
    usuario.salario !== undefined ? `R$ ${usuario.salario.toFixed(2)}` : "N/A";

  return `${pessoa.nome}, ${pessoa.idade} anos, ${pessoa.ocupacao}, salario ${salario}`;
}

const daphine: Usuario = {
  nome: "Daphine",
  idade: 23,
  ocupacao: "analista de TI",
  salario: 1000,
};

console.log(mostrarUsuario(daphine));
