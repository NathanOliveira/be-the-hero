import React from 'react';
// ROTAS DO BROWSER
//(Switch) GARANTIR QUE SEJA UMA ROTA POR VEZ
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// IMPORTAR AS PAGINAS
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';

// CRIAR COMPONENTE
//(exact) Caminho absoluto da rota, utilizado para a pagina inicial
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}