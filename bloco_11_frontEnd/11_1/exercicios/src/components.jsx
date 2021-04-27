import React from 'react';

class Tasks extends React.Component {
    render() {
        const arr = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]
        const task = (value) => {
            return (
              <li>{value}</li>
            );
          }
        return arr.map(element => task(element));
    }
}

export default Tasks;