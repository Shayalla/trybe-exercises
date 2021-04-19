function colocaEstados() {
  const estados = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goías',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraíma',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins',
  ];
  const select = document.querySelector("#estados");
  for (let index = 0; index < estados.length; index += 1) {
    const opcoes = document.createElement("option");
    opcoes.innerHTML = estados[index]
    opcoes.value = estados[index];
    select.appendChild(opcoes);
  }
}

colocaEstados();

//peguei essa função do:https://www.linhadecomando.com/javascript/javascript-funcao-para-verificar-se-valor-digitado-e-um-numero
function verificaCPF() {
    const textoCPF = document.querySelector('#cpf');
    textoCPF.addEventListener('keypress', function (){
        checaNumero(this.value);
    })
}

verificaCPF();

function checaNumero(valor){
    let regra = /^[0-9]+$/;
    if (valor !== 0){
        if (valor.match(regra)) {
            console.log('é numero');
        }else {
            alert("Permitido somente número");
        }
    }
  }  
  
  function dataInicio(){
    let picker = new Pikaday({field:document.querySelector('#datepicker')});
    picker.toString('DD-MM-YYYY');
  }
  dataInicio();

  function isset(str) {
    return window[str] !== undefined;
}

function renderCurriculum(event) {
  event.preventDefault();
  const formElements = document.querySelectorAll('input');
  for (let index = 0; index < formElements.length; index += 1) {
    if (formElements[index].type === 'radio' && !formElements[index].checked) {
      continue;
    }
    const userInput = formElements[index].value;
    const dataUser = document.querySelector('.form-data');
    if (checkEmail() && checkData()) {
      const div = document.createElement('div');
      div.className = 'div-curriculum';
      div.innerHTML = userInput;
      dataUser.appendChild(div);
    }
  }
}

function apertaBotao(){
  const submitButton = document.querySelector('.submit-button');
  submitButton.addEventListener('click', renderCurriculum);
}
apertaBotao()

function validateData(data) {
  if (data.indexOf('/') === 2 || data.indexOf('/') === 5) {
    const day = data.substr(0, 2);
    const month = data.substr(3, 2);
    const year = data.substr(6, 4);
    if ((day > 0 && day < 31) && (month > 0 && month <= 12) && (year > 0 && year.length === 4)) {
      return true;
    }
  }
  return false;
}
validateData();

function checkData() {
  const inputData = document.querySelector('.input-data');
  let data = inputData.value;
  const userData = validateData(data);
  if (!userData && data.length) {
    inputData.value = '';
    alert('data invalida');
    return false;
  }
  return userData;
}
checkData();

function checkEmail() {
  const email = document.querySelector('.email-input');
  let insertedEmail = email.value;
  const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(insertedEmail);
  if (!emailFormat && insertedEmail.length) {
    email.value = '';
    alert('email inválido');
    return false;
  }
  return emailFormat
}
checkEmail();