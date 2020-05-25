import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import api from '../../services/api';

import './styles.css';

export default function EditarUsuario() {
    const [usuario, setUsuario] = useState('{}');
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [perfilId, setPerfilId] = useState('');
    const [perfis, setPerfis] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        api.get('perfil')
            .then(response => {
                setPerfis(response.data);
            });

        api.get(`usuario/${id}`)
            .then(resultado => {
                setPerfilId(resultado.data.perfilId);
                setUsuario(resultado.data.id);
                setNome(resultado.data.nome);
                setSexo(resultado.data.sexo);
                setCpf(resultado.data.cpf);
                setEndereco(resultado.data.endereco)
                setCep(resultado.data.cep);
                setTelefone(resultado.data.telefone);
            });
    }, [id]);

    async function handleAtualizar() {
        const data = {
            "id": usuario,
            nome,
            telefone,
            sexo,
            cpf,
            cep,
            endereco,
            perfilId,

        };

        console.log(data);

        try {
            await api.put('usuario', data)
            alert('Usuário atualizado');
        } catch (error) {
            alert('Erro ao atualizar o usuário');

        }
    };

    return (
        <div className="edit-container">
            <header>
                <Link to="/usuario">
                    <FaArrowLeft size={18} color="#FFF" />
                </Link>
                <h1>Editar usuário</h1>
            </header>
            <div className="content">
                <form onSubmit={handleAtualizar}>
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
                        <select name="perfis" onChange={e => setPerfilId(e.target.value)}>
                            {perfis.map(perfil => (
                                <option key={perfil.id} value={perfil.id}>{perfil.nome}</option>
                            ))}

                        </select>
                    </div>

                    <button type="submit">
                        Atualizar
                    </button>

                </form>

            </div>
        </div>
    );
}