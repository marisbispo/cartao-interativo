const nomeInput = document.querySelector('[data-input="name"]');
const nomeCartao = document.querySelector('[data-cartao="name"]');

const numeroInput = document.querySelector('[data-input="numero"]');
const numeroCartao = document.querySelector('[data-cartao="numero"]');
const numeroCVC = document.querySelector('[data-cartao="cvc"]');

const dataCartao = document.querySelector('[data-cartao="vencimento"]');
const dataInputMes = document.querySelector('[data-input="mes"]');
const dataInputAno = document.querySelector('[data-input="ano"]');
const dataInputVencimento = document.querySelector('[data-input="vencimento"]');
const dataInputCVC = document.querySelector('[data-input="cvc"]');

nomeInput.addEventListener('input', colocarNome);

function colocarNome(event) {
  const regexNome = /^[A-Z a-z]+$/;
  if (event.target.value.match(regexNome)) {
    nomeCartao.innerText = event.target.value;
  } else {
    console.log('nome invalido');
  }

  if (event.target.value.length > 20) {
    nomeCartao.innerText = event.target.value.substr(0, 20);
    event.target.value = event.target.value.substr(0, 20);
  }
}

numeroInput.addEventListener('input', colocarNumero);

function colocarNumero(event) {
  console.log(event.target.value);
  numeroCartao.innerText = event.target.value;
}

dataInputVencimento.addEventListener('input', colocarVencimento);

function colocarVencimento(event) {
  const regex = /\d{2}/g;
  const ano = document.querySelector('.ano');

  if (dataInputMes.value.length > 2) {
    dataInputMes.value = dataInputMes.value.substr(1, 2);
  }

  if (event.target === dataInputMes && event.target.value.match(regex)) {
    console.log('numero', event.target.value);
    document.querySelector('.mes').innerText = event.target.value;
  }

  if (dataInputAno.value.length > 2) {
    dataInputAno.value = dataInputAno.value.substr(1, 2);
  }

  if (event.target === dataInputAno && event.target.value.match(regex)) {
    ano.innerText = event.target.value;
  }
}

dataInputCVC.addEventListener('input', adicionarCVC);

function adicionarCVC(event) {
  numeroCVC.innerText = event.target.value;
  if (event.target.value.length > 3) {
    event.target.value = event.target.value.substr(0, 2);
    numeroCVC.innerText = event.target.value.substr(0, 20);
  }
}
