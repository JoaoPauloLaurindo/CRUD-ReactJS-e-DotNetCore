import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaArrowLeft, FaEdit, FaTrashAlt } from 'react-icons/fa';
import api from '../../services/api'

import './styles.css'

export default function Perfil() {
    const [perfis, setPerfis] = useState([]);
    const [funcionalidades, setFuncionalidade] = useState([]);

    const history = useHistory();

    useEffect(() => {
        api.get('perfil')
            .then(response => {
                setPerfis(response.data);
            });
    }, []);

    function Editar(id) {
        history.push(`editar-perfil/${id}`);
    }

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
                    {perfis.map(perfil => (
                        <li key={perfil.id}>
                            <strong>Perfil</strong>
                            <p>{perfil.nome}</p>
                            <strong style={{ marginTop: 10 }}>Funcionalidades</strong>
                            {perfil.funcionalidades.map(funcionalidade => (
                                <p key={funcionalidade.id}>
                                    {funcionalidade.nome}
                                </p>
                            ))}
                            <div className="actions">
                                <FaEdit size={20} color="#000" onClick={() => Editar(perfil.id)} />
                                <FaTrashAlt size={20} color="#000" />
                            </div>

                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}