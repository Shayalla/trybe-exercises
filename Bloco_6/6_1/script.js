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
    // let state = estados[index];
    const opcoes = document.createElement("option");
    opcoes.innerHTML = estados[index]
    opcoes.value = estados[index];
    select.appendChild(opcoes);
  }
}

colocaEstados();
