import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
   handleClick() {
    console.log(this)
    console.log('Clicou no 1 botão!')
  }
  
   handleClick1() {
    console.log(this)
    console.log('Clicou no 2 botão!')
  }
  
   handleClick2() {
    console.log(this)
    console.log('Clicou no 3 botão!')
  }
  render() {
    return (
      
      <div>
    <button onClick={this.handleClick}>Meu botão</button>
    <button onClick={this.handleClick1}>Meu botão</button>
    <button onClick={this.handleClick2}>Meu botão</button>
    </div> 
      )
  }
}

export default App;
