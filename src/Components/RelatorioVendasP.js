import React from 'react'
import NavBar from './NavBar'
const RelatorioVendasP = props => {
    return (
        <div>
            <NavBar />
            <main class="mdl-layout__content">
                <div class="page-content">
                    <div class="mdl-grid">
                       <div class="mdl-cell "></div>
                        <div class="mdl-cell "></div>
                        <h3 className="center-align">Relatório de Vendas a Prazo</h3>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Valor Total</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        
                        </tbody>
                    </table>
                    <div className="form-field center-align">
                            <button className="btn-large blue">Marcar como pago</button>
                            
                    </div>
                    
                </div>
            </main>
        </div>
    )}
    export default RelatorioVendasP