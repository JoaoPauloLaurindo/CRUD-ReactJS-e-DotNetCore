import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import api from '../../services/api'

import './styles.css';

export default function RegistrarPerfil() {
    const [name, setName] = useState('');

    async function handleRegister() {

        const data = {
            "nome": name,
        };

        try {
            await api.post('perfil', data)
            alert('Cadastrado com sucesso');
        } catch (error) {
            alert('Ops! Houve um erro, tente novamente');
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
                <form onSubmit={handleRegister}>
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
                        Registrar
                    </button>

                </form>

            </div>
        </div>
    );
}