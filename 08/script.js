/*
Crie uma lista de pacientes

Cada paciente dentro da lista, deverá conter
  nome
  idade
  peso
  altura

Escreva uma lista contendo o nome dos pacientes, suas idades, alturas e pesos
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
]

let patientsNames = []
let patientsWeight = []
let patientsAge = []
let patientsHeight = []
// for (let index = 0; index < patients.length; index++) {
//   patientsNames[index] = patients[index].name
// } // UMA FORMA DE FAZER
for(let patient of patients)/*para um paciente de pacientes*/ {
  patientsNames.push(patient.name)
  patientsWeight.push(patient.weight)
  patientsAge.push(patient.age)
  patientsHeight.push(patient.height)
}//forma mais curta de fazer a mesma coisa 

for( let index = 0; index < patients.length; index++){

alert(`${patientsNames[index]}, tem ${patientsAge[index]} anos, pesa ${patientsWeight[index]}kg e tem ${patientsHeight[index]}cm de altura.`)}