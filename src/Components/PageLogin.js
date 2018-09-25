import React from 'react'
const Login = props => {
    return (
        <div className="row">
            <div className="col s12 14 offset-14">
                <div className="card">
                    <div className="card-action blue white-text">
                        <h3>Login Form</h3>
                    </div>
                    <div className="card-content">
                        <div className="form-field">
                            <label for="username">E-mail</label>
                            <input type="text" id="username" />
                        </div><br />
                        <div className="form-field">
                            <label for="password">Senha</label>
                            <input type="password" id="password" />
                        </div><br />
                        <div className="form-field">
                            <input type="checkbox" id="remember" />
                            <label for="remember">Lembrar-me</label>
                            
                        </div><br />
                        <div className="form-field center-align">
                            <button className="btn-large blue">Acessar </button>
                        </div><br />
                    </div>
                </div>
            </div>
        </div>
    )}
export default Login