import React from 'react';
import { Link } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';

import './styles.css';

export default function RegistrarFuncionalidade() {
    return (
        <div className="register-container">
            <header>
                <Link to="/funcionalidade">
                    <FaArrowLeft size={18} color="#FFF" />
                </Link>
                <h1>Registrar uma nova funcionalidade</h1>
            </header>

            <div className="content">
                <form>
                    <div className="input-group">
                        <h3>Funcionalidade</h3>
                        <input type="text" placeholder="Nome da funcionalidade" />
                    </div>

                    <Link to="/funcionalidade">
                        <button type="submit">
                            Registrar
                        </button>
                    </Link>

                </form>

            </div>
        </div>
    );
}