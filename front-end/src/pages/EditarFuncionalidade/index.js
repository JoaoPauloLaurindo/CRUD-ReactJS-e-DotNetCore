import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import api from '../../services/api';

export default function EditarFuncionalidade() {
    const [name, setName] = useState('');
    const [funcionalidadeId, setFuncionalidadeId] = useState('');
    const [perfilId, setPerfilId] = useState('');
    const [perfis, setPerfis] = useState([]);
    const history = useHistory();
    let { id } = useParams();

    useEffect(() => {
        api.get('perfil')
            .then(response => {
                setPerfis(response.data);
            });

        api.get(`funcionalidade/${id}`)
            .then(resultado => {
                setName(resultado.data.nome);
                setFuncionalidadeId(resultado.data.id);
                setPerfilId(resultado.data.perfilId);
            })
    }, [id]);

    async function handleEditar() {
        try {
            const data = {
                "id": funcionalidadeId,
                "nome": name,
                "perfilId": perfilId,
            };

            await api.put('funcionalidade', data);
            alert('Funcionalidade atualizada');
            history.push('/funcionalidade');
        } catch (error) {
            alert('Erro ao atualizar, tente novamente');
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