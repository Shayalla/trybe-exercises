// //Imprima no console uma mensagem de boas-vindas para a personagem, incluindo seu nome.
// let info = {
//     personagem: "Margarida",
//     origem: "Pato Donald",
//     nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
//   };

// //   console.log('Bem-vinda, ' + info.personagem)

// //Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.

// info.recorrente = 'Sim';

// // console.log(info); 

// //Faça um for/in que mostre todas as chaves do objeto.
// // for (key in info){
// //     console.log(key)
// // }

// //Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
// // for (key in info) {
// //     console.log(info[key])
// // }
// //Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim'
// }



// for (let key in info) {
//     if (info[key] === info.recorrente && info[key] === "Sim" && info2[key] === "Sim") {
//       console.log("Ambos recorrentes");
//     } else {
//       console.log(`${info[key]} e ${info2[key]}.`);
//     }
//   }

//FUNÇÕES

//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// function verificaPalindromo(palavra) {
//     for (var i = 0; i < palavra.length / 2; i++) {
//         if (palavra[i] != palavra[palavra.length - i - 1]) {
//             return false;
//         } else {
//             return true;
//         }
//     }
// }
//     console.log(verificaPalindromo('arara'));
//     console.log(verificaPalindromo('desenvolvimento'));

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// let array = [2, 3, 6, 7, 10, 1];

// function indiceMaiorValor(array) {
//   let maior = 0;
//   for (let i in array) {
//     if (array[i] > maior) {
//       maior = i;
//     }
//   }
//   return maior;
// }
// console.log(indiceMaiorValor(array));

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// const array = [2, 4, 6, 7, 10, 0, -3]

// function indiceMenorValor(array) {
//   let menor = '';
//   for (let i in array) {
//     if (array[i] < menor) {
//       menor = i;
//     }
//   }
//   return menor;
// }
// console.log(indiceMenorValor(array));

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// const array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function nomeMaior(array) {
//   let palavra = '';
//   let tamanho = 0;
//   for (let index in array) {
//     if (array[index].length > tamanho) {
//       palavra = array[index];
//       tamanho = array[index].length;
//     }
//   }
//   return palavra;
// }
// console.log(nomeMaior(array));

//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// const array = [2, 3, 2, 5, 8, 2, 3];

const array = [1, 2, 3, 4, 5]

function numeroMaisRepete(array) {
  let numeroOrdenado = array.sort();
  let total = 1;
  let resultado = 0;
  let temp = 1;
  for (let index = 0; index <= numeroOrdenado.length - 1; index += 1) {
    if (numeroOrdenado[index] === numeroOrdenado[index + 1]) {
      temp += 1;

    } else if (temp > total) {
      resultado = numeroOrdenado[index];
      total = temp;
      temp = 1
    }
  }
  if (resultado === 0){
    return 'Não existe número repetido!'
  }
  return resultado;
}
console.log(numeroMaisRepete(array));