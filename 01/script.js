/*
  Encontre a solução ao problema:

  Pergunte o nome do usuário e escreva a mensagem:
  "Olá, [nome do usuário]"
*/

let nome = prompt("Qual o seu nome?") 
/*prompt é para captar dados, nesse caso, vai perguntar o nome do usuário
e ele vai retornar um valor para algum lugar e precisamos pegar esse dado 
e guardar em algum lugar*/

alert("Olá, " + nome)