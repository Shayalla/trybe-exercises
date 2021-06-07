import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addClients } from '../actions'

export class CadastroClientes extends Component {
  constructor (){
    super();
    this.state = {
      name:'',
      age: 0,
      email: '',
    }
  }

  handleChange = ({ target }) => { 
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { submit } = this.props;
    const { name, age, email } = this.state;
    return (
      <div>
        <label htmlFor="client">Nome:
          <input type="text" name="name" id="client" value={name} onChange={ this.handleChange }/>
        </label>
        <br/>
        <label htmlFor="age">Idade:
          <input type="text" name="age" id="age" value={age} onChange={ this.handleChange }/>
        </label>
        <br/>
        <label htmlFor="email">Email:
          <input type="text" name="email" id="email" value={email} onChange={ this.handleChange }/>
        </label>
        <br/>
        <button onClick={ () => submit(this.state) }>Cadastro</button>
        <Link to="/clientescadastrados">Clientes Cadastrados</Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({ submit: (client) => dispatch(addClients(client)) });

export default connect(null, mapDispatchToProps)(CadastroClientes);
