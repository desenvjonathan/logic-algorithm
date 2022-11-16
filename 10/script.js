/*
  Ao clicar em um botão, apresenta em tela um elemento que estava escondido
*/

const button = document.querySelector('button')

button.addEventListener('click', handleClick)

function handleClick() {
  document.querySelector('p').classList.toggle/*ele ao invés do remove e do add, só faz uma troca*/('hide')
}