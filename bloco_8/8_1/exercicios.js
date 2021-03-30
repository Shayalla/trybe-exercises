//1 Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const nomeEmail = (nomeCompleto) => ({
  nome: nomeCompleto,
  email: `${nomeCompleto.replace(" ", "_").toLowerCase()}@trybe.com`,
});

const newEmployees = () => {
  const employees = {
    id1: nomeEmail("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: nomeEmail("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: nomeEmail("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  };
  return employees;
};

// console.log(newEmployees());

//2 Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const sorteiaNum = () => Math.ceil(Math.random() * 5);

const checaVitoria = (numSorteado, num) =>
  numSorteado === num ? "Parabéns você ganhou" : "Tente novamente";

// console.log(checaVitoria(sorteiaNum(), 4));

//3 Crie uma HOF utilizando o conceito de currying . Passe como parâmetros a resposta correta (Ex: Gabarito) para uma pergunta e uma resposta a ser validada (Ex: Resposta de uma pessoa). Sua HOF deve checar se a resposta enviada pela pessoa usuária é correta. Se for, a função retorna true , se não for, a função retorna false .
// A validação da resposta não deve ser case sensitive.
// Deve ser possível chamar a HOF criada de forma encadeada (Ex: checarResposta('Gabarito')('Teste'))

const verificaAcerto = (respostaCerta) => (resposta) =>
  resposta.toUpperCase() == respostaCerta.toUpperCase();

// console.log(verificaAcerto('resposta')('RespoSta'));

//Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const rightAnswers = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const studentAnswers = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const contagem = (respostasCorretas, respostas) => {
    let contador = 0;
    for (let index = 0; index <= respostas.length; index += 1) {
      if (respostas[index] === respostasCorretas[index]) {
        contador += 1;
      } else if (respostas[index] === "N.A") {
        contador += 0;
      } else if (respostas[index] !== respostasCorretas[index]) {
        contador -= 0.5;
      }
    }
    return contador;

};
const nota = (respostasCertas, respostasEstudante, acao) => {
   console.log(acao(respostasCertas, respostasEstudante)); 
}

// nota(rightAnswers, studentAnswers, contagem);
