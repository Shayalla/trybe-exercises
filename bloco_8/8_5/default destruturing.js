// const person = {
//   name: "João",
//   lastName: "Jr",
//   age: 34,
// };

// const { nationality } = person;

// const person = {
//   name: "João",
//   lastName: "Jr",
//   age: 34,
// };

// const { nationality = "Brazilian" } = person;
// console.log(nationality); // Brazilian

// const position2d = [1.0, 2.0];
// const [x, y, z = 0] = position2d;

// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // 0

//fixação

const getNationality = ({ firstName, nationality = 'Brazilian'}) =>
  `${firstName} is ${nationality}`;

const person = {
  firstName: "João",
  lastName: "Jr II",
};
const { nationality = "Brazilian" } = person;

const otherPerson = {
  firstName: "Ivan",
  lastName: "Ivanovich",
  nationality: "Russian",
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
