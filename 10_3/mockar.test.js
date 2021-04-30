//JEST.FN();

// function randomRgbColor() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
//   }

//   test("#randomRgbColor", () => {
//     randomRgbColor = jest.fn().mockReturnValue("default value")
//     .mockReturnValueOnce('first call')
//     .mockReturnValueOnce('second call');

//   expect(randomRgbColor).toHaveBeenCalledTimes(0);

//   expect(randomRgbColor()).toBe("first call");
//   expect(randomRgbColor).toHaveBeenCalledTimes(1);

//   expect(randomRgbColor()).toBe("second call");
//   expect(randomRgbColor).toHaveBeenCalledTimes(2);

//   expect(randomRgbColor()).toBe("default value");
//   expect(randomRgbColor).toHaveBeenCalledTimes(3);;
//     expect(randomRgbColor).toHaveBeenCalled();
//   });

//JEST.MOCK()

const math = require('./math');
// jest.mock("./math");

// test("#somar", () => {
//   // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

//   math.somar.mockImplementation((a, b) => a + b);
//   math.somar(1, 2);

//   expect(math.somar).toHaveBeenCalled();
//   expect(math.somar).toHaveBeenCalledTimes(1);
//   expect(math.somar).toHaveBeenCalledWith(1, 2);
//   expect(math.somar(1, 2)).toBe(3);
// });

//jest.spyOn()

// test("#somar", () => {
//   // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
//   const mockSomar = jest.spyOn(math, "somar");

//   mockSomar(1, 2);
//   expect(mockSomar).toHaveBeenCalled();
//   expect(mockSomar).toHaveBeenCalledTimes(1);
//   expect(mockSomar).toHaveBeenCalledWith(1, 2);
//   expect(mockSomar(1, 2)).resolves.toBe(3);
// });

//LIMPANDO, RESTANDO E RESTAURANDO O MOCK
// const math = require('./math');
test("#somar", () => {
  // testando a implementação original, o mock e o mock resetado

  // implementação original
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  math.somar = jest.fn().mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar(5, 1)).toBe(4);
  expect(math.somar).toHaveBeenCalledTimes(2);
  expect(math.somar).toHaveBeenLastCalledWith(5, 1);

  // resetando o mock
  math.somar.mockReset();
  expect(math.somar(1, 2)).toBe(undefined);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenLastCalledWith(1, 2);
});