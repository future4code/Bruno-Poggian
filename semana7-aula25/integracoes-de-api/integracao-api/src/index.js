//importar módulos
import React from 'react'
import ReactDOM from 'react-dom';

// importei os componentes
import Formulario from './components/Formulario';
import BotaoEnviar from './components/BotaoEnviar';

//Componente do aquivo index.js

class Principal extends React.Component{
    render(){
        return(
            <div>
                <Formulario/>
                <BotaoEnviar/>
            </div>
        );
    }
}

//Render
ReactDOM.render(<Principal/>,document.getElementById('root'));