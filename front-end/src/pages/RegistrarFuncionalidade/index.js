import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'

import { FaArrowLeft } from 'react-icons/fa';

import './styles.css';

export default function RegistrarFuncionalidade() {
    const [name, setName] = useState('');
    const [perfis, setPerfis] = useState([]);
    const [perfilId, setPerfilId] = useState('');

    useEffect(() => {
        api.get('perfil')
            .then(response => {
                setPerfis(response.data);
            });

    }, []);

    async function handleRegister() {
        const data = {
            "nome": name,
            "perfilId": perfilId,
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

                    <div className="input-group">
                        <h3>Perfil</h3>
                        <select name="perfis" onChange={e => setPerfilId(e.target.value)}>
                            {perfis.map(perfil => (
                                <option key={perfil.id} value={perfil.id}>{perfil.nome}</option>
                            ))}

                        </select>
                    </div>


                    <button type="submit">
                        Registrar
                    </button>

                </form>

            </div>
        </div>
    );
}