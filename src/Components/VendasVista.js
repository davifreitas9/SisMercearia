import React from 'react'
import NavBar from './NavBar'
const VendasVista = props => {
    return (
      <div>
            <NavBar />
            <main class="mdl-layout__content">
                <div class="page-content">
                    <div class="mdl-grid">
                       <div class="mdl-cell "></div>
                        <div class="mdl-cell "></div>
                        <h3 className="center-align">Vendas a Vista</h3>
                    </div>
                    <form action="#">
                      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <label className="label-img" for="file-input">Foto do Código de Barras do Produto</label>
                            <input type='file' accept='image/*' id='file-input' capture />
                      </div>
                      <div className="form-field center-align">
                            <button className="btn-large blue">Confirmar Produto </button>
                     </div>
                      <table>
                          <thead>
                            <tr>
                                <th>Item</th>
                                <th>Preço Unitário</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input class="mdl-textfield__input" type="text" id="sample3" />
                            <label class="mdl-textfield__label" for="sample3">Valor Total</label>
                        </div>
                    </form>
                    <div className="form-field center-align">
                            <button className="btn-large blue">Cadastrar </button>
                    </div>
                </div>
            </main>
        </div>
    )}
    export default VendasVista