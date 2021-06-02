import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ClientesCadastrados extends Component {
  render() {
    return (
      <div>   
        <p>Nenhum cliente cadastrado</p>
        <Link to='/cadastrocliente'>Cadastrar cliente</Link>
      </div>
    )
  }
}

export default ClientesCadastrados;
