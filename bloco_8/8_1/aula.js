// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
// //   repeat(5, console.log);

// // repeat(10, (number) => {
// //     if (number % 2 === 0) {
// //       console.log(number, 'is even');
// //     }
// //   });

// const isEven = (number) => {
//     if (number % 2 === 0) {
//       console.log(number, 'is even');
//     }
//   };
  

//   const isOdd = (number) => {
//     if ((number % 2) > 0) {
//       console.log(number, 'is odd');
//     }
//   };
  
// //   repeat(3, isEven); // Testa quais números serão pares;
// //   repeat(3, isOdd); // Testa quais números serão ímpares;
  
// const greaterThan = (firstNumber) => (secondNumber) => secondNumber > firstNumber;

// // const greaterThan10 = greaterThan(10);
// // console.log(greaterThan10(15));
// // true

// // ===========

// // Ao chamarmos a função desta forma:
// // const greaterThan10 = greaterThan(10);

// // Na prática é a mesma coisa que realizar assim:
// // const greaterThan10 = (secondNumber) => {
// //   return secondNumber > 10; // O parâmetro nomeado como "firstNumber" foi ocupado;
// // };

// // console.log(greaterThan10(15));

// // Retornando o nosso resultado abaixo:
// // true
// console.log(greaterThan(10)(15));

//PRATICANDO

const acordar = () => console.log('Acordando!!');

const cafe = () => console.log('Bora tomar café!!');

const dormir = () => console.log('Partiu dormir!!');

const fazendoCoisas = () => console.log();

fazendoCoisas(dormir())