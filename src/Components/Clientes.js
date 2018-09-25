import React from 'react'
import NavBar from './NavBar'
const Clientes = props => {
    return (
        <div>
            <NavBar />
            <main class="mdl-layout__content">
                <div class="page-content">
                    <div class="mdl-grid">
                       <div class="mdl-cell "></div>
                        <div class="mdl-cell "></div>
                        <h3 className="center-align">Cadastro de Clientes</h3>
                        
                    </div>
                    <form action="#">
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input class="mdl-textfield__input" type="text" id="sample3" />
                            <label class="mdl-textfield__label" for="sample3">Nome</label>
                        </div>
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input class="mdl-textfield__input" type="text" id="sample3" />
                            <label class="mdl-textfield__label" for="sample3">Endereço</label>
                        </div>
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input class="mdl-textfield__input" type="text" id="sample3" />
                            <label class="mdl-textfield__label" for="sample3">CPF</label>
                        </div>
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input class="mdl-textfield__input" type="text" id="sample3" />             
                            <label class="mdl-textfield__label" for="sample3">Telefone</label>
                        </div>
                    </form>
                    <div className="form-field center-align">
                            <button className="btn-large blue">Cadastrar </button>
                    </div>
                </div>
            </main>
        </div>
    )}
    export default Clientes