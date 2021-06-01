import './App.css';
import React, { Component } from 'react'
import Input from './components/Input';
import Select from './components/Select';

class App extends Component {
  render() {
    return (
      <div>
        <form action="" >
          <Input type='text' name='nome' />
          <Input type='text' name='email' />
          <Input type='text' name='CPF' />
          <Input type='text' name='cidade' />
          <Select name='estado' />
          <p>Tipo: </p>
          <label htmlFor="casa">
            <input type="radio" name="casaApe" id="casa" value='casa'/>Casa
          </label>
          <label htmlFor="ape">
            <input type="radio" name="casaApe" id="ape" value='apartamento'/>Apartamento
          </label>
          <br />
          <p>Resumo Curriculo:</p>
          <textarea name="resumo" id="resumo" cols="50" rows="20" maxLength='40'></textarea>
          <br />
          <label htmlFor="cargo">Resumo Cargo:
            <input type="text" name="cargo" id="cargo" max='500' />
          </label>
          <br />
          <button type="submit">Enviar!</button>
          <button type="reset">Limpar</button>
        </form>
      </div >
    );
  }
}

export default App;
