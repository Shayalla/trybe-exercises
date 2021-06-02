import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class Login extends Component {
  render() {
    return (
      <>
      <label htmlFor="user">Usuário:
        <input type="text" name="user" id="user"/>
      </label>
      <br/>
      <label htmlFor="senha">Senha:
        <input type="password" name="senha" id="senha"/>
      </label>
      <br/>
      <Link to="/clientescadastrados">Entrar</Link>
      </>
    );
  }
}

export default Login;
