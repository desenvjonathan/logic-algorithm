/*
  Solicite 2 números, faça a soma deles e apresente o resultado final ao usuário
*/

alert("Iremos somar 2 números")
let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")
let result = Number(numberOne) + Number(numberTwo)
alert("Resultado Final: " + result)
// Se colocarmos string, ele irá concatenar ao invés de somar
/* Para somar, nós precisamos utilizar o operador de grupo, ou seja, 
iremos isolar os números para obter o resultado e esse resultado será concatenado
com a string */