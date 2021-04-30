const fecth8000 = new Promise((resolve, reject) => {
  const numeros = [];
  for (let index = 0; index < 10; index += 1) {
    const number = Math.ceil(Math.random() * 50);
    numeros.push(number);
  }
  const result = numeros
    .map((numero) => (numero = numero ** 2))
    .reduce((acc, curr) => acc + curr);
  if (result > 8000) {
    return reject(result);
  }
  resolve(result);
})
  .then((data) => {
    console.log("Promise resolvida " + data);
    const dividir = [2, 3, 5, 10];
    const res = dividir.map((num) => data / num);
    console.log(res);
    return res;
  })
  .then((res1) => {
    console.log(res1.reduce((acc, curr) => acc + curr));
  })
  .catch((res) =>
    console.log("É mais de oito mil! Essa promise deve estar quebrada! " + res)
  );

console.log(fecth8000);
