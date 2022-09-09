const nomeInput = document.querySelector('[data-input="name"]');
const nomeCartao = document.querySelector('[data-cartao="name"]');

const numeroInput = document.querySelector('[data-input="numero"]');
const numeroCartao = document.querySelector('[data-cartao="numero"]');

const dataCartao = document.querySelector('[data-cartao="vencimento"]');
const dataInputMes = document.querySelector('[data-input="mes"]');
const dataInputAno = document.querySelector('[data-input="ano"]');
const dataInputVencimento = document.querySelector('[data-input="vencimento"]');

nomeInput.addEventListener('input', colocarNome);

function colocarNome(event) {
  console.log(event.target.value);
  nomeCartao.innerText = event.target.value;
}

numeroInput.addEventListener('input', colocarNumero);

function colocarNumero(event) {
  console.log(event.target.value);
  numeroCartao.innerText = event.target.value;
}

dataInputVencimento.addEventListener('input', colocarVencimento);

function colocarVencimento(event) {
  if (event.target === dataInputMes) {
    document.querySelector('.mes').innerText = event.target.value;
  }

  if (event.target === dataInputAno) {
    document.querySelector('.ano').innerText = event.target.value;
  }
}
