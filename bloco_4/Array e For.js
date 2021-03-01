//Arrays 

//let menu = ['Home', 'Serviços', 'Portfólio', 'Portfólio'];
// let menuServices = menu[1] ;

// console.log(menuServices);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portfólio');

// console.log(indexOfPortfolio);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

// menu.push('Contato');

// console.log(menu);

//FOR

// let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];

// for (let i = 0; i < groceryList.length; i++){
//     console.log(groceryList[i]);
// }

//Exercicios

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1
// for (let i = 0; i < numbers.length; i++){
//      console.log(numbers[i]);
// }

//2
// let soma = 0;

// for (let i = 0; i < numbers.length; i++){
//     soma = soma + numbers[i]
// }
// console.log(soma);

//3 e 4

// let soma = 0;

// for (let i = 0; i < numbers.length; i++) {
   
//     soma = soma + numbers[i];
   
// }
// let resultado = soma / numbers.length-1;

// if (resultado > 20){
//     resultado = 'Valor maior que 20'
// } else {
//     resultado = 'Valor menor que 20'
// }
// console.log(resultado);

// 5
// let maior = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > maior) {
//         maior = numbers[i];
//     }
// }


//6

// let resultado = 0;

// for (index = 0; index < numbers.length; index += 1){
//     if (numbers[index] % 2 !== 0) {
//         resultado += 1;    
//     }
// }
// if ( resultado === 0){
//     console.log('nenhum valor ímpar encontrado')
// } else {
    
//     console.log(resultado);
// }

//7
// let menor = maior;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < menor) {
//          menor = numbers[i];
//     }
// }
// console.log(menor);

//8
// let resultado = [];
// let quantidade = 25; 

// for (let index = 1; index <= quantidade; index += 1){
//     resultado.push(index);
// }
// console.log(resultado)

// 9
// let resultadoDivisao = [];

// for (let indexD = 0; indexD <= resultado.length -1; indexD += 1){
//     resultadoDivisao.push(resultado[indexD] / 2);
// }
// console.log(resultadoDivisao)

// Função
// let a = 5;
// let b = 2;

// function sum(a, b) {
//     return a + b;
//   }

//   console.log(sum(10, 5))