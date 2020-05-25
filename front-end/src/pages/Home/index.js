import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';

import './styles.css';

export default function Home() {
    return (
        <div className="home-container">
            <Link to="/usuario">
                <section className="card">
                    <h1>Usuários</h1>
                    <p>
                        Clique aqui para visualizar os usuários.
                    </p>
                    <FaLongArrowAltRight size={20} color="#008000" />
                </section>
            </Link>

            <Link to="/perfil">
                <section className="card">
                    <h1>Perfil</h1>
                    <p>
                        Clique aqui para visualizar os perfis de usuarios.
                    </p>
                    <FaLongArrowAltRight size={20} color="#008000" />
                </section>
            </Link>

            <Link to="/funcionalidade">
                <section className="card">
                    <h1>Funcionalidades</h1>
                    <p>
                        Clique aqui para visualizar as funcionalidades.
                    </p>
                    <FaLongArrowAltRight size={20} color="#008000" />
                </section>
            </Link>
        </div>
    );
}