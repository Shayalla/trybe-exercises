//Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
    setTimeout(() => {
    callback(str.toUpperCase())
}, 200)
  };

test('testando Uppercase', done =>{
    uppercase('jessie', (result) => {
        expect(result).toBe('JESSIE');
        done();
    });
})

//Código-base para os exercícios 2 e 3:
//O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma Promise , que é utilizada pelo método getUserName .

const users = {
    4 : { name: 'Mark' },
    5 : { name: 'Paul' }
    };
    
    const findUserById = (id) => {
      return new Promise((resolve, reject) => {
          if (users[id]) {
            return resolve(users[id]);
          };
    
          return reject({ error: 'User with ' + id + ' not found.' });
      });
    };
    
    const getUserName = (userID) => {
      return findUserById(userID).then(user => user.name);
    };

//Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
//: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.

describe('Quando o usuario existe', () => {
    it(' retorna o usuario', () => {
        return getUserName(4).then(user => {
            expect(user).toEqual('Mark')
        })
    })
})

describe('Quando usuario não existe', () => {
    it('retorna usuario não encontrado', () => {
        expect.assertions(1);
        return getUserName(2).catch(erro => {
            expect(erro).toEqual({ error: 'User with ' + 2 + ' not found.' })
        })
    })
})

//Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
// Dica: Utilize o try/catch para o caso de erro.

describe('Quando o usuario existe', () => {
    it(' retorna o usuario', async () => {
        const userName = await getUserName(4);
            expect(userName).toEqual('Mark')
        })
})

describe('Quando usuario não existe', () => {
    it('retorna usuario não encontrado', async () => {
        expect.assertions(1);
        try {
            await getUserName(2);
        } catch (error) {
            expect(error).toEqual({ error: 'User with ' + 2 + ' not found.' })
        }
    })
})

//O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('testar api do git se tem determinado repositorio', () => {
    it('retorna toDo list', () =>{
        return getRepos('https://api.github.com/orgs/tryber/repos').then(listRepo => {
            expect(listRepo).toContain('sd-01-week4-5-project-todo-list');
            expect(listRepo).toContain('sd-01-week4-5-project-meme-generator')
        })
    })
})

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});