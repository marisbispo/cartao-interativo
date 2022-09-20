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

nomeInput.addEventListener('input', colocarNome);

function colocarNome(event) {
  let erros = [];
  const regexNome = /^[A-Z a-z]+$/;
  if (event.target.value.match(regexNome)) {
    nomeCartao.innerText = event.target.value;
    erros.splice(0, erros.length);
    avisoErro('.erro-nome', erros);
  } else {
    erros.push('Digite o nome corretamente');
    avisoErro('.erro-nome', erros);
  }
}

numeroInput.addEventListener('input', colocarNumero);

function colocarNumero(event) {
  let erros = [];
  let numeroFormatado = event.target.value
    .toString()
    .replace(/\d{4}(?=.)/g, '$& ');
  numeroCartao.textContent = numeroFormatado;

  if (event.target.value.length < 16) {
    erros.push('Digite os numeros corretamente');
    avisoErro('.erro-numero', erros);
  }

  if (event.target.value.length === 16) {
    console.log('certo');
    erros.splice(0, erros.length);
    avisoErro('.erro-numero', erros);
  }

  if (event.target.value.length > 16) {
    event.target.value = event.target.value.substr(0, 16);
    numeroCartao.textContent = numeroFormatado.substr(0, 20);
  }
}

dataInputVencimento.addEventListener('input', colocarVencimento);

function colocarVencimento(event) {
  let erros = [];
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

  if (dataInputAno.value.length != 2 || dataInputMes.value.length != 2) {
    erros.push('Digite a data de vencimento corretamente');
    avisoErro('.erro-data', erros);
  } else {
    erros.splice(0, erros.length);
    avisoErro('.erro-data', erros);
  }
}

dataInputCVC.addEventListener('input', adicionarCVC);

function adicionarCVC(event) {
  let erros = [];
  numeroCVC.innerText = event.target.value;
  if (event.target.value.length > 3) {
    event.target.value = event.target.value.substr(0, 2);
    numeroCVC.innerText = event.target.value.substr(0, 20);
  }

  if (event.target.value.length < 3) {
    erros.push('Digite o cvc corretamente');
    avisoErro('.erro-cvc', erros);
  } else {
    erros.splice(0, erros.length);
    avisoErro('.erro-cvc', erros);
  }
}

enviar.addEventListener('click', enviarDados);

function enviarDados(event) {
  event.preventDefault();
  avisoErro('.erro-Msg', validaCampos());
  if (avisoErro('.erro-Msg', validaCampos())) {
    window.location.href = 'enviado.html';
  }
}

function avisoErro(classe, erros) {
  const erroMsg = document.querySelector(classe);

  if (erros.length >= 1) {
    erroMsg.innerHTML = '';
    erros.forEach((erro) => {
      const li = document.createElement('li');
      li.innerText = erro;
      erroMsg.appendChild(li);
    });
  } else if (erros.length < 1) {
    console.log(erroMsg.innerText);
    erroMsg.innerText = '';
    return true;
  }
}

function validaCampos() {
  let erros = [];
  if (dataInputMes.value.length != 2) {
    erros.push('Digite o Campo do mes corretamente!');
  }
  if (dataInputAno.value.length != 2) {
    erros.push('Digite o Campo do ano corretamente!');
  }

  if (dataInputCVC.value.length != 3) {
    erros.push('Digite o codigo de segurança corretamente!');
  }

  if (dataInputCVC.value.length != 3) {
    erros.push('Digite o codigo de segurança corretamente!');
  }

  if (numeroInput.value.length != 16) {
    erros.push('Digite o numero do cartão corretamente!');
  }

  if (nomeInput.value.length < 5) {
    erros.push('Digite o nome corretamente!');
  }

  return erros;
}
