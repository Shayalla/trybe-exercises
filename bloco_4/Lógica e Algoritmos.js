//1 faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n 
// let n = 5;
// let asterisco = '*';
// let resultado = '';

// for(let index = 0; index < n; index += 1){
//     resultado = resultado + asterisco;
// };

// for( index = 0; index < n; index +=1){
//     console.log(resultado);
// }



//2 Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// let n = 5;
// let asterisco = '*';
// let semVirgula = ' ';


// for (let index = 0; index < n; index += 1){
//     
//     semVirgula = semVirgula + asterisco;
//     console.log(semVirgula);
    
// }

//3 Agora inverta o lado do triângulo. Por exemplo:

// let posicao = n;

// for (let index = 0; index <= n; index += 1){   
//     for (let indexColuna = 0; indexColuna < n; indexColuna += 1){
//         if (indexColuna < posicao){
//             semVirgula = semVirgula + ' ';
//         } else {
//             semVirgula = semVirgula + asterisco;
//         }
//     }
//     console.log(semVirgula);
//     semVirgula = '';
//     posicao -= 1;
// }

//4 Por fim, faça uma pirâmide com n asteriscos de base:


// let n = 5;
// let lineIndex;
// let lineColumn;
// let lineInput = '';
// let symbol = '*';

// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight= midOfMatrix;

// for (lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//   for (lineColumn = 1; lineColumn <= n; lineColumn += 1) {
//     if (lineColumn > controlRight && lineColumn < controlLeft) {
//       lineInput = lineInput + symbol;
//     } else {
//       lineInput = lineInput + ' ';
//     }
//   }
//   console.log(lineInput);
//   lineInput = '';
//   controlRight -= 1;
//   controlLeft += 1;
// };

//7 Faça uma pirâmide com n asteriscos de base, que seja vazia no meio:

// let n = 5;
// let middle = (n + 1) / 2;
// let controlLeft = middle;
// let controlRight = middle;
// let symbol = '*';
// for (let line = 1; line <= middle; line += 1) {
//   let outputLine = '';
//   for (let col = 1; col <= n; col += 1) {
//     if (col == controlLeft || col == controlRight || line == middle) {
//       outputLine += symbol;
//     } else {
//       outputLine += ' ';
//     }
//   }
//   controlLeft -= 1;
//   controlRight += 1;
//   console.log(outputLine);
// }

//6 É primo ou não

// let divisor = 1;
// let numberToCheck = 42;

// for (let number = 2; number <= numberToCheck; number += 1) {
//   if (numberToCheck % number === 0){
//     divisor += 1;
//     }
// }

// if (divisor === 2){
//     console.log(numberToCheck + ' é primo');
// } else {
//     console.log(numberToCheck + ' não é primo');
// } 

