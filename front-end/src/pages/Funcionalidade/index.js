import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaEdit, FaTrashAlt } from 'react-icons/fa';

import './styles.css'

export default function Funcionalidade() {
    return (
        <div className="user-container">
            <header>
                <Link to="/">
                    <FaArrowLeft size={18} color="#FFF" />
                </Link>
                <h1>Funcionalidades</h1>
            </header>

            <Link to="/registrar-funcionalidade">
                <p style={{ color: '#FFF' }}>Adicionar funcionalidade</p>
            </Link>

            <div className="content">
                <ul>
                    <li>
                        <strong>Funcionalidade</strong>
                        <p>Remover</p>
                        <div className="actions">
                            <FaEdit size={20} color="#000" />
                            <FaTrashAlt size={20} color="#000" />
                        </div>

                    </li>

                    <li>
                        <strong>Funcionalidade</strong>
                        <p>Alterar</p>
                        <div className="actions">
                            <FaEdit size={20} color="#000" />
                            <FaTrashAlt size={20} color="#000" />
                        </div>

                    </li>

                    <li>
                        <strong>Funcionalidade</strong>
                        <p>Criar</p>
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