import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.fileInput = React.createRef();

    this.state = {
      estadoFavorito: "",
      idade: 0,
      vaiComparecer: false,
      fileInput: ''
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(`Selected file - ${this.fileInput.current.files[0].name}`);
  }

  render() {
    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
            =)
            <label>
              Upload file:
              <input type="file" ref={this.fileInput} />
            </label>
            <textarea
              name="estadoFavorito"
              value={this.state.estadoFavorito}
              onChange={this.handleChange}
            />
          </label>
          <input
            type="number"
            name="idade"
            value={this.state.idade}
            onChange={this.handleChange}
          />
          <input
            type="checkbox"
            name="vaiComparecer"
            value={this.state.vaiComparecer}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
