/*
Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

"Paciente X possuii o IMC de Y"

Onde X é o nome do paciente e Y é o IMC desse paciente

Crie uma função para fazer o cálculo de IMC
*/

/*
  IMC = peso / (altura * altura)
*/

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: " Alexandra",
    age: 27,
    weight: 70,
    height: 170,
  },
  {
    name: " Carlos",
    age: 42,
    weight: 90,
    height: 180,
  },
] //guarda informação

function IMC (weight, height) {
  return (weight / ((height / 100) **2)).toFixed(2)
} //faz o cálculo da informação, mas não usa

// function printPatientIMC(patients) {
//   return `
//   Paciente ${patients.name} possui o IMC de
//   ${(patients.weight / ((patients.height/100)**2)).toFixed(2)}
// `
// } //executa a função

function printPatientIMC(patients) {
  return `
  Paciente ${patients.name} possui o IMC de
  ${IMC(patients.weight, patients.height)}
`
} // posso comentar esse código e descomentar o código acima

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert (IMCmessage)
} //imprime a função
