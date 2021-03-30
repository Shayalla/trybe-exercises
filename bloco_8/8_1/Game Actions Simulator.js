const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

//Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const danoDragao = () =>
  Math.floor(Math.random() * (battleMembers.dragon.strength - 15) + 15);

// battleMembers.dragon.damage = danoDragao();

// console.log(battleMembers.dragon.damage);

//Crie uma função que reotorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const danoGuerreiro = () =>
  Math.floor(
    Math.random() *
      (battleMembers.warrior.strength * battleMembers.warrior.weaponDmg -
        battleMembers.warrior.strength) +
      battleMembers.warrior.strength
  );

// battleMembers.warrior.damage = danoGuerreiro();

// console.log(battleMembers.warrior.damage);

//Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const danoMago = () => {
  if (battleMembers.mage.mana < 15) {
    return "Não possui mana suficiente";
  }
  const dano = {
    damageSpell: Math.floor(
      Math.random() *
        (battleMembers.mage.intelligence * 2 -
          battleMembers.mage.intelligence) +
        battleMembers.mage.intelligence
    ),
    spellCost: 15,
  };
  return dano;
};

// battleMembers.mage.damage = danoMago();

// comMana();
// console.log(battleMembers.mage.damage);
///////////////////////////////////////////

const guerreiro = (danoGuerreiro) => {
  return (
    (battleMembers.dragon.healthPoints -= danoGuerreiro),
    (battleMembers.warrior.damage = danoGuerreiro)
  );
};
const mago = (danoMago) => {
  return (
    (battleMembers.dragon.healthPoints -= danoMago.damageSpell),
    (battleMembers.mage.mana -= danoMago.spellCost),
    (battleMembers.mage.damage = danoMago.damageSpell)
  );
};

const dragao = (danoDragao) => {
  return (
    (battleMembers.warrior.healthPoints -= danoDragao),
    (battleMembers.mage.healthPoints -= danoDragao),
    (battleMembers.dragon.damage = danoDragao)
  );
};

const gameActions = {
  actionWarrior: guerreiro(danoGuerreiro()),
  actionMage: mago(danoMago()),
  actionDragon: dragao(danoDragao()),
  membros: battleMembers,
};

console.log(gameActions);
console.log(gameActions.membros);