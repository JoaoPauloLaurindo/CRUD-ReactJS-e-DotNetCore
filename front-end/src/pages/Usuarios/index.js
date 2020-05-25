import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaEdit, FaTrashAlt } from 'react-icons/fa';

import './styles.css'

export default function Usuarios() {
    return (
        <div className="user-container">
            <header>
                <Link to="/">
                    <FaArrowLeft size={18} color="#FFF" />
                </Link>
                <h1>Usuários</h1>
            </header>

            <Link to="/registrar-usuario">
                <p style={{ color: '#FFF' }}>Adicionar usuário</p>
            </Link>

            <div className="content">
                <ul>
                    <li>
                        <strong>João Paulo</strong>
                        <p>Administrador</p>
                        <p>61 99999-76543</p>
                        <div className="actions">
                            <FaEdit size={20} color="#000" />
                            <FaTrashAlt size={20} color="#000" />
                        </div>

                    </li>

                    <li>
                        <strong>João Paulo</strong>
                        <p>Administrador</p>
                        <p>61 99999-76543</p>
                        <div className="actions">
                            <FaEdit size={20} color="#000" />
                            <FaTrashAlt size={20} color="#000" />
                        </div>

                    </li>

                    <li>
                        <strong>João Paulo</strong>
                        <p>Administrador</p>
                        <p>61 99999-76543</p>
                        <div className="actions">
                            <FaEdit size={20} color="#000" />
                            <FaTrashAlt size={20} color="#000" />
                        </div>

                    </li>

                    <li>
                        <strong>João Paulo</strong>
                        <p>Administrador</p>
                        <p>61 99999-76543</p>
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