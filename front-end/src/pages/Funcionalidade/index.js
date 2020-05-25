import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaArrowLeft, FaEdit, FaTrashAlt } from 'react-icons/fa';
import api from '../../services/api'

import './styles.css'

export default function Funcionalidade() {
    const [funcionalidades, setFuncionalidades] = useState([]);
    const history = useHistory();

    useEffect(() => {
        api.get('funcionalidade')
            .then(response => {
                setFuncionalidades(response.data);
            });
    }, []);

    function Editar(id) {
        history.push(`editar-funcionalidade/${id}`);
    }

    function Remover(id) {

        api.delete(`funcionalidade/${id}`)
            .then(response => {
                alert('Funcionalidade excluida');
                setFuncionalidades(funcionalidades.filter(funcionalidade => funcionalidade.id !== id));
            }).catch(err => {
                alert('Erro ao excluir funcionalidade');
            });
    }

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
                    {funcionalidades.map(funcionalidade => (
                        <li key={funcionalidade.id}>
                            <strong>Funcionalidade</strong>
                            <p>{funcionalidade.nome}</p>
                            <div className="actions">
                                <FaEdit size={20} color="#000" onClick={() => Editar(funcionalidade.id)} />
                                <FaTrashAlt size={20} color="#000" onClick={() => Remover(funcionalidade.id)} />
                            </div>

                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}