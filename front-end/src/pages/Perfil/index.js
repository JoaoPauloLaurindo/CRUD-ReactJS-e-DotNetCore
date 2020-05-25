import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaEdit, FaTrashAlt } from 'react-icons/fa';

import './styles.css'

export default function Perfil() {
    return (
        <div className="user-container">
            <header>
                <Link to="/">
                    <FaArrowLeft size={18} color="#FFF" />
                </Link>
                <h1>Perfis</h1>
            </header>

            <Link to="/registrar-perfil">
                <p style={{ color: '#FFF' }}>Adicionar perfil</p>
            </Link>

            <div className="content">
                <ul>
                    <li>
                        <strong>Perfil</strong>
                        <p>Administrador</p>
                        <div className="actions">
                            <FaEdit size={20} color="#000" />
                            <FaTrashAlt size={20} color="#000" />
                        </div>

                    </li>

                    <li>
                        <strong>Perfil</strong>
                        <p>Coordenador</p>
                        <div className="actions">
                            <FaEdit size={20} color="#000" />
                            <FaTrashAlt size={20} color="#000" />
                        </div>

                    </li>

                    <li>
                        <strong>Perfil</strong>
                        <p>Advogado</p>
                        <div className="actions">
                            <FaEdit size={20} color="#000" />
                            <FaTrashAlt size={20} color="#000" />
                        </div>

                    </li>

                    <li>
                        <strong>Perfil</strong>
                        <p>Funcionário</p>
                        <div className="actions">
                            <FaEdit size={20} color="#000" />
                            <FaTrashAlt size={20} color="#000" />
                        </div>

                    </li>
                </ul>
            </div>

        </div>
    );
}