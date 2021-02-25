// let num1 = 1;
// let num2 = 2;
// let num3 = 3;

//1//

// let soma = num1 + num2;

// let subtracao = num2 - num1;

// let multiplicacao = num2 * num3;

// let divisao = num2 / num1;

// let modulo = ((num1 * num2)%2) == 0;

// console.log(soma, subtracao, multiplicacao, divisao, modulo);

//2

// if (num1 > num2) {
//     console.log(num1);
// } else {
//     console.log(num2);
// }

//3

// if (num1 > num2 && num3){
//     console.log("numero 1 ganhou");
// } else if (num2 > num1 && num3) {
//     console.log('numero 2 ganhou');
// } else {
//     console.log('numero 3 ganhou');
// }

//4

// if (num1 > 0) {
//     console.log('positive');
// } 
// else if (num1 < 0) {
//     console.log('negative');
// } 
// else {
//     console.log('zero');

//5

// let eTriangulo = (num1 + num2 + num3) == 180;
// console.log(eTriangulo);

//6

// let pecaXadrez = 'Rei';

// switch (pecaXadrez.toLowerCase()) {
//     case 'peao' :
//         console.log('uma casa para frente');
//         break;
//     case 'torre' :
//         console.log('linha reta');
//         break;
//     case 'cavalo' :
//         console.log('duas para frente e uma para o lado');
//         break;
//     case 'bispo' :
//         console.log('diagonais');
//         break;
//     case 'rainha' :
//         console.log('diagonais e linha reta');
//         break;
//     case 'rei' :
//         console.log('uma casa para todos os lados');
//         break;
//     default : 
//         console.log('Peça inválida');
// }

//7

// let nota = 70;

// if (nota > 100) {
//     console.log('Erro!');
// } else if (nota >= 90) {
//     console.log('A');
// } else if (nota >= 80){
//     console.log('B');
// } else if (nota >= 70){
//     console.log('C');
// } else if (nota >= 60){
//     console.log('D');
// } else if (nota >= 50){
//     console.log('E');
// } else if (nota < 0){
//     console.log('Erro!')
// } else {
//     console.log('F')
// }

//8

// let resultado = false;

// if ((num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0)) {
//     resultado = true;
// } 
// console.log(resultado);

//9

// let resultado = false;

// if ((num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0)) {
//      resultado = true;
// } 
// console.log(resultado);

//10

// let custoProduto = 1;
// let valorVenda = 3;

// if (custoProduto >= 0 && valorVenda >= 0) {
//   let totalCustoProduto = custoProduto * 1.2;
//   let lucro = (valorVenda - totalCustoProduto) * 1000;
//   console.log(lucro);
// } else {
//   console.log("Erro, os valores não podem ser negativos");
// };

//11


let INSS;
let IR;

let salario = 3000;

if (salario <= 1556.94) {
  INSS = salario * 0.08;
} else if (salario <= 2594.92) {
  INSS = salario * 0.09;
} else if (salario <= 5189.82) {
  INSS = salario * 0.11;
} else {
  INSS = 570.88;
}

let salarioBase = salario - INSS;

if (salarioBase <= 1903.98) {
  IR = 0;
} else if (salarioBase <= 2826.65) {
  IR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  IR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  IR = (salarioBase * 0.225) - 636.13;
} else {
  IR = (salarioBase * 0.275) - 869.36;
};

console.log("Salário: " + (salarioBase - IR));