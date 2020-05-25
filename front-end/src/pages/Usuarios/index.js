import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaArrowLeft, FaEdit, FaTrashAlt } from 'react-icons/fa';
import api from '../../services/api'

import './styles.css'

export default function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const history = useHistory();

    useEffect(() => {
        api.get('usuario')
            .then(response => {
                setUsuarios(response.data);
            });
    }, []);

    function Remover(id) {
        api.delete(`usuario/deletar/${id}`)
            .then(response => {
                alert('Usuário excluido');
                setUsuarios(usuarios.filter(usuario => usuario.id !== id));

            }).catch(err => {
                alert('Erro ao excluir usuário');
            });
    };

    function Editar(id) {
        history.push(`/editar-usuario/${id}`);
    };

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
                    {usuarios.map(usuario => (
                        <li key={usuario.id}>
                            <strong>{usuario.nome}</strong>
                            <p>{usuario.perfil.nome}</p>
                            <p>{usuario.telefone}</p>
                            <div className="actions">
                                <FaEdit size={20} color="#000" onClick={() => Editar(usuario.id)} />
                                <FaTrashAlt size={20} color="#000" onClick={() => Remover(usuario.id)} />
                            </div>

                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}