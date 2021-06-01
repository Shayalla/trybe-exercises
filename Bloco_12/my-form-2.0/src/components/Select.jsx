import React, { Component } from 'react'

export class Select extends Component {
	render() {
		const arrEstados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];
		const { name } = this.props;
		const capitalized = name[0].toUpperCase() + name.substr(1);// do site: https://metring.com.br/javascript-primeira-letra-maiuscula
		return (
			<label htmlFor={name}>{capitalized}:
				<select name={name} id={name}>
					{arrEstados.map((estado) => <option value={estado}>{estado}</option>)}
				</select>
			</label>
		)
	}
}

export default Select
