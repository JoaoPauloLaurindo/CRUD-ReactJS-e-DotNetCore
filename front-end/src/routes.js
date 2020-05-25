import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Usuarios from './pages/Usuarios';
import Funcionalidade from './pages/Funcionalidade';
import Perfil from './pages/Perfil';
import RegistrarUsuario from './pages/RegistrarUsuario';
import RegistrarPerfil from './pages/RegistrarPerfil';
import RegistrarFuncionalidade from './pages/RegistrarFuncionalidade';
import EditarUsuario from './pages/EditarUsuario';
import EditarPerfil from './pages/EditarPerfil';
import EditarFuncionalidade from './pages/EditarFuncionalidade';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/usuario' component={Usuarios} />
                <Route path='/funcionalidade' component={Funcionalidade} />
                <Route path='/perfil' component={Perfil} />
                <Route path='/registrar-usuario' component={RegistrarUsuario} />
                <Route path='/registrar-perfil' component={RegistrarPerfil} />
                <Route path='/registrar-funcionalidade' component={RegistrarFuncionalidade} />
                <Route path='/editar-usuario/:idUsuario' component={EditarUsuario} />
                <Route path='/editar-perfil/:idPerfil' component={EditarPerfil} />
                <Route path='/editar-funcionalidade/:idFuncionalidade' component={EditarFuncionalidade} />
            </Switch>
        </BrowserRouter>
    );
}