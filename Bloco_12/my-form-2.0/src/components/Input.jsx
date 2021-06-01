import React, { Component } from 'react'

export class Input extends Component {
	render() {
		const { type, value, name } = this.props;
		const capitalized = name[0].toUpperCase() + name.substr(1);// do site: https://metring.com.br/javascript-primeira-letra-maiuscula
		return (
			<label htmlFor={name}> {capitalized}:
				<input type={type} name={name} id={name} value={value}required />
				<br />
			</label>
		)
	}
}

export default Input;
