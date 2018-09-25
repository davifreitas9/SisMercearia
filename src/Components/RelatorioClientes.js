import React from 'react'
import NavBar from './NavBar'
const RelatorioClientes = props => {
    return (
        <div>
            <NavBar />
            <main class="mdl-layout__content">
                <div class="page-content">
                    <div class="mdl-grid">
                       <div class="mdl-cell "></div>
                        <div class="mdl-cell "></div>
                        <h3 className="center-align">Relatório de Clientes</h3>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>CPF</th>
                            <th>Telefone</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        
                        </tbody>
                    </table>
                    <div className="form-field center-align">
                            <button className="btn-large blue">Excluir </button>
                            
                    </div>
                    
                </div>
            </main>
        </div>
    )}
    export default RelatorioClientes