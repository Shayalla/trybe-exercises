import React, { Component } from 'react'

export class InputRadio extends Component {
	render() {
		return (
			
          <label htmlFor="casa">
            <input type="radio" name="casaApe" id="casa" value='casa'/>Casa
          </label>
		)
	}
}

export default InputRadio
