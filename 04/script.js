/*
  Solicitar o nome do aluno e as 3 notas do bimestre e calcular a média 
  daquele aluno.

  A média positiva deverá ser maior que 6.

  Se o aluno passou no bimestre, das or parabéns.

  Se o aluno não passou no bimestre, motivaar o aluno aa dar seu melhor na 
  prova de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota.
*/

let student = prompt ("Qual o nome do(a) aluno(a)?")
let note1 = prompt ("Qual a nota da primeira prova?")
let note2 = prompt ("Qual a nota da segunda prova?")
let note3 = prompt ("Qual a nota da terceira prova?")

/* fazer a média

  (note1 + note2 + note3) / 3
  precismos colocar entre parênteses para efetuar primeiro o cálculo da soma e
  depois da divisão
*/

let average = (Number(note1) + Number(note2) + Number(note3)) / 3

let result = average >= 6 
average = average.toFixed(2) /* toFixed: é utilizado para colocar quantas casas 
decimais eu atribuir*/
// boa prática, para não ficar repetindo o código, e assim facilitar a manutenção

/*se verdadeiro, entrará nessa linha de código*/if (result) {
  alert("Parabéns, " + student + "! Sua média foi de " + average)
} /*se atender esse requisito, ele entrará nessa linha de código*/else if (average < 3) {
  alert("O aluno " + student + " foi reprovado! Sua média foi de " + average)
} /*se não, entrará nessa linha de código(no caso, falso)*/ else{
  alert(student + " estude para sua prova de recuperação! Sua média foi de : " + 
  average)
}