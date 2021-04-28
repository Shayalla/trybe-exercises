import React, { Component } from "react";

export class Pokemon extends Component {
  render() {
			const { Pokedex: { name, type, averageWeight, image } } = this.props
    return <div>
			<h3>Nome: {name}</h3>
			<p>Tipo: {type}</p>
			<p>Peso: {averageWeight.value}{averageWeight.measurementUnit}</p>
			<img src={image} alt={name} />
		</div>;
  }
}


export default Pokemon;
