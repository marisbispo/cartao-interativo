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
const enviar = document.querySelector('[data-enviar]');
const formulario = document.querySelector('[data-form="formulario"]');

formulario.addEventListener('click', escreverDados);

function escreverDados(event) {
  console.log(event.target);
}
