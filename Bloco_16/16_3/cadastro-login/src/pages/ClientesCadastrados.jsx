import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class ClientesCadastrados extends Component {
  render() {
    const { registered } = this.props;
    return (
      <div>   
        {(registered === null)?
        <>
        <p>Nenhum cliente cadastrado</p>
        </>
        :
        <section>
          {registered.map((cliente, index) => <ul key={index}>
            <li>{cliente.client.name}</li>
            <li>{cliente.client.email}</li>
            <li>{cliente.client.age}</li>
          </ul>
          ) }
        </section>
        }
        <Link to='/cadastrocliente'>Cadastrar cliente</Link>
      </div>
    )
  }
}
 
const mapStateToProps = (state) => ({
  registered: state.clients,
})

export default connect(mapStateToProps, null)(ClientesCadastrados);
