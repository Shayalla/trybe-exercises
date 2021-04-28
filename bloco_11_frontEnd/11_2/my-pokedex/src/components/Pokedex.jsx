import React, { Component } from 'react'
import Pokemon from './Pokemon';

export class Pokedex extends Component {
	render() {
		const { Pokedex } = this.props;
		return (
			<div>
				{Pokedex.map((pokemon) => <Pokemon key={pokemon.id} Pokedex={pokemon} />)}
			</div>
		)
	}
}

export default Pokedex
