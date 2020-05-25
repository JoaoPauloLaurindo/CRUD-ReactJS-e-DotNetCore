import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'

import { FaArrowLeft } from 'react-icons/fa';

import './styles.css';

export default function RegistrarFuncionalidade() {
    const [name, setName] = useState('');

    async function handleRegister() {
        const data = {
            "nome": name,
            "perfilId": "F022F9EE-D845-4D5A-DACA-08D8005822B8",
        }

        try {
            await api.post('funcionalidade', data);
            alert('Cadastrado com sucesso');
        } catch (error) {
            alert('Ops! Houve um erro, tente novamente');
        }
    }

    return (
        <div className="register-container">
            <header>
                <Link to="/funcionalidade">
                    <FaArrowLeft size={18} color="#FFF" />
                </Link>
                <h1>Registrar uma nova funcionalidade</h1>
            </header>

            <div className="content">
                <form onSubmit={handleRegister}>
                    <div className="input-group">
                        <h3>Funcionalidade</h3>
                        <input
                            type="text"
                            placeholder="Nome da funcionalidade"
                            value={name}
                            onChange={e => setName(e.target.value)} />
                    </div>


                    <button type="submit">
                        Registrar
                    </button>

                </form>

            </div>
        </div>
    );
}