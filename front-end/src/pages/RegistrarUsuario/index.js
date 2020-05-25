import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'

import { FaArrowLeft } from 'react-icons/fa';

import './styles.css';

export default function RegistrarUsuario() {
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');

    async function handleRegister() {
        const data = {
            nome,
            sexo,
            cpf,
            telefone,
            cep,
            endereco,
            "perfilId": "F022F9EE-D845-4D5A-DACA-08D8005822B8"
        };

        try {
            await api.post('usuario', data);
            alert('Cadastrado com sucesso');
        } catch (error) {
            alert('Ops! Houve um erro, tente novamente');
        }
    }

    return (
        <div className="register-container">
            <header>
                <Link to="/usuario">
                    <FaArrowLeft size={18} color="#FFF" />
                </Link>
                <h1>Registrar um novo usuário</h1>
            </header>

            <div className="content">
                <form onSubmit={handleRegister}>
                    <div className="input-group">
                        <h3>Nome</h3>
                        <input
                            type="text"
                            placeholder="Nome completo"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <h3>Sexo</h3>
                        <input
                            type="text"
                            placeholder="Sexo"
                            value={sexo}
                            onChange={e => setSexo(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <h3>CPF</h3>
                        <input
                            type="number"
                            placeholder="CPF"
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <h3>Telefone</h3>
                        <input
                            type="tel"
                            placeholder="Telefone"
                            value={telefone}
                            onChange={e => setTelefone(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <h3>CEP</h3>
                        <input
                            type="number"
                            placeholder="CEP"
                            value={cep}
                            onChange={e => setCep(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <h3>Endereço</h3>
                        <input
                            type="text"
                            placeholder="Endereço"
                            value={endereco}
                            onChange={e => setEndereco(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <h3>Perfil</h3>
                        <select name="perfis">
                            <option value="Adm">Administrador</option>
                            <option value="Adm">Coordenador</option>
                            <option value="Adm">Operacional</option>
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