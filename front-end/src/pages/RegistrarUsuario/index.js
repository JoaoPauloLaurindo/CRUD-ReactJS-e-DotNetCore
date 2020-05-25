import React from 'react';
import { Link } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';

import './styles.css';

export default function RegistrarUsuario() {
    return (
        <div className="register-container">
            <header>
                <Link to="/usuario">
                    <FaArrowLeft size={18} color="#FFF" />
                </Link>
                <h1>Registrar um novo usuário</h1>
            </header>

            <div className="content">
                <form>
                    <div className="input-group">
                        <h3>Nome</h3>
                        <input type="text" placeholder="Nome completo" />
                    </div>

                    <div className="input-group">
                        <h3>Sexo</h3>
                        <input type="text" placeholder="Sexo" />
                    </div>

                    <div className="input-group">
                        <h3>CPF</h3>
                        <input type="number" placeholder="CPF" />
                    </div>

                    <div className="input-group">
                        <h3>Telefone</h3>
                        <input type="tel" placeholder="Telefone" />
                    </div>

                    <div className="input-group">
                        <h3>CEP</h3>
                        <input type="number" placeholder="CEP" />
                    </div>

                    <div className="input-group">
                        <h3>Endereço</h3>
                        <input type="text" placeholder="Endereço" />
                    </div>

                    <div className="input-group">
                        <h3>Perfil</h3>
                        <select name="perfis">
                            <option value="Adm">Administrador</option>
                            <option value="Adm">Coordenador</option>
                            <option value="Adm">Operacional</option>
                        </select>
                    </div>

                    <Link to="/usuario">
                        <button type="submit">
                            Registrar
                        </button>
                    </Link>

                </form>

            </div>
        </div>
    );
}