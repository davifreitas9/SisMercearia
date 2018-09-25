import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'



const NavBar = () => {
    return (
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <h4></h4>
            
        </header>
        <div class="mdl-layout__drawer">
            <div class="mdl-navigation">
                    <a class="mdl-navigation__link" href="">CLIENTES</a>
                <a class="mdl-navigation__link" href="">RELATÓRIOS DE CLIENTES</a>
                <a class="mdl-navigation__link" href="">PRODUTOS</a>
                <a class="mdl-navigation__link" href="">RELATÓRIOS DE PRODUTOS</a>
                <a class="mdl-navigation__link" href="">VENDAS A PRAZO</a>
                <a class="mdl-navigation__link" href="">RELATÓRIOS DE VENDAS A PRAZO</a>
                <a class="mdl-navigation__link" href="">VENDAS A VISTA</a>
                <a class="mdl-navigation__link" href="">RELATÓRIOS DE VENDAS A VISTA</a>
            </div>
        </div>
    </div>
)}
export default NavBar