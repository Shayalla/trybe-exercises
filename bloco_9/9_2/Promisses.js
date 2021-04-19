//Para criar a Promise, utilizamos o construtor Promise junto com o operador new . Um construtor nada mais é do que uma função especial que cria um objeto a partir de uma classe. Se você nunca ouviu falar de classes ou construtores, não se preocupe! Seu entendimento não é necessário para entender Promises. Apenas observe a sintaxe.
//O construtor recebe uma função com 2 parâmetros: resolve e reject . Mantenha a calma que já vamos ver a importância desses dois. Um ponto a se notar aqui é que usamos uma arrow function para passar a função como parâmetro pro construtor, mas você pode utilizar qualquer construção, desde que seja uma função com 2 parâmetros.

const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 11);

    if (number <= 5) {
      return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
    }
    resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
});

//Existe apenas uma pequena diferença entre o resolve/reject e o return : enquanto o return interrompe a excução da função quando é chamado, o resolve/reject não o fazem, por isso é importante utilizar um return antes de um deles quando não se quer que a execução continue (esse pattern se chama 'early-return', mas não se preocupe com nomes agora).

//Existem 2 principais ferramentas que podemos usar para gerir o fluxo assíncrono com promises: o .then() e o .catch() . Vamos começar falando sobre o .then() . Para isso , vamos refatorar nossa promise:
const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random()* 11);
  
    if (number <= 5) {
      return reject(number);
    }
    resolve(number);
  })
  .then(number => `Que sucesso =) nosso número foi ${number}`)
  .then(msg => console.log(msg))
  .catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));