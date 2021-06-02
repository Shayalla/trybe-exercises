import './App.css';
import { Home, Login, ClientesCadastrados, CadastroClientes } from './pages/index'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/clientescadastrados"  component={ ClientesCadastrados } />
      <Route exact path="/cadastrocliente"  component={ CadastroClientes } />
    </Switch>
  );
}

export default App;
