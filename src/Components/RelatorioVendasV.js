import React from 'react'
import NavBar from './NavBar'
const RelatorioVendasV = props => {
    return (
        <div>
            <NavBar />
            <main class="mdl-layout__content">
                <div class="page-content">
                    <div class="mdl-grid">
                       <div class="mdl-cell "></div>
                        <div class="mdl-cell "></div>
                        <h3 className="center-align">Relatório de Vendas a Vista</h3>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th>Data</th>
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
                            <button className="btn-large blue">Excluir</button>
                            
                    </div>
                    
                </div>
            </main>
        </div>
    )}
    export default RelatorioVendasV