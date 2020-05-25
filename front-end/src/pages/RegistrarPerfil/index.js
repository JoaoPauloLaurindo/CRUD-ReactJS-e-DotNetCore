import React from 'react';
import { Link } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';

import './styles.css';

export default function RegistrarPerfil() {
    return (
        <div className="register-container">
            <header>
                <Link to="/perfil">
                    <FaArrowLeft size={18} color="#FFF" />
                </Link>
                <h1>Registrar um novo perfil</h1>
            </header>

            <div className="content">
                <form>
                    <div className="input-group">
                        <h3>Perfil</h3>
                        <input type="text" placeholder="Nome do Perfil" />
                    </div>

                    <Link to="/perfil">
                        <button type="submit">
                            Registrar
                        </button>
                    </Link>

                </form>

            </div>
        </div>
    );
}