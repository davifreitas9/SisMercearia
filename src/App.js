import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Login from './Components/PageLogin'
import Clientes from './Components/Clientes'
import Produtos from './Components/Produtos'
import VendasPrazo from './Components/VendasPrazo'
import VendasVista from './Components/VendasVista'
import RelatorioClientes from './Components/RelatorioClientes'
import RelatorioProdutos from './Components/RelatorioProdutos'
import RelatorioVendasP from './Components/RelatorioVendasP'
import RelatorioVendasV from './Components/RelatorioVendasV'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>
          <Route exact={true} path='/' component={ Login } />
          <Route path='/clientes' component={ Clientes } />
          <Route path='/produtos' component={ Produtos } />
          <Route path='/vendasprazo' component={ VendasPrazo } />
          <Route path='/vendasvista' component={ VendasVista } />
          <Route path='/relatorioclientes' component={ RelatorioClientes } />
          <Route path='/relatorioprodutos' component={ RelatorioProdutos } />
          <Route path='/relatoriovendasprazo' component={ RelatorioVendasP } />
          <Route path='/relatoriovendasvista' component={ RelatorioVendasV } />
        </Switch>

      </div>
    </BrowserRouter>
    );
  }
}

export default App;
