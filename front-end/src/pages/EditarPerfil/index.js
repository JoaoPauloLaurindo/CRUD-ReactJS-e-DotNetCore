import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import api from '../../services/api';

import './styles.css'

export default function EditarPerfil() {
    const [name, setName] = useState('');
    const [perfilId, setPerfilId] = useState('');
    let { id } = useParams();

    useEffect(() => {
        api.get(`perfil/${id}`)
            .then(resultado => {
                setName(resultado.data.nome);
                setPerfilId(resultado.data.id);
            })
    }, [id]);

    async function handleEditar() {
        try {
            const data = {
                "id": perfilId,
                "nome": name,
            };

            await api.put('perfil', data);
            alert('Perfil atualizado');
        } catch (error) {
            alert('Erro ao atualizar, tente novamente');
        }
    }

    return (
        <div className="register-container">
            <header>
                <Link to="/perfil">
                    <FaArrowLeft size={18} color="#FFF" />
                </Link>
                <h1>Registrar um novo perfil</h1>
            </header>

            <div className="content">
                <form onSubmit={handleEditar}>
                    <div className="input-group">
                        <h3>Perfil</h3>
                        <input
                            type="text"
                            placeholder="Nome do Perfil"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <button type="submit">
                        Atualizar
                    </button>

                </form>

            </div>
        </div>
    );
}