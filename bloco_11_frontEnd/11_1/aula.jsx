const nome = 'Jorge Maravilha';
const element = <h1>Hello, {nome}</h1>;

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

//chamando uma função na nossa constante element
const element = <h1>Hello, {nomeCompleto("Jorge", "Maravilha")}</h1>;

//Incorporar a nossa constante element na função helloWorld , retornar um código JSX e encapsulá-la em uma div

function helloWorld(nome, sobrenome) {
    return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}

const container = <div>{element}</div>;

// sobre a substituição de class por className em JSX? Podemos também utilizar expressões Javascript para atribuir valor à este atributo.

const nome = 'Jorge Maravilha';
const classe = 'hello-class';
const element = <h1 className={classe}>Hello, {nome}</h1>;

//Para fixar, crie um elemento JSX que recebe o valor "Hello, JSX" de uma constante chamada textJSX , e o incorpora em uma tag h1 .

const textJSX = "Hello, JSX";

const h1 = <h1>{textJSX}</h1>