import {Link} from 'react-router-dom'

export function Sobre(){
    return(
        <div>
            <h1> Bem vindo a página Sobre!</h1>
            <Link to="/"> Ir para Home</Link>
            <br/>
            <Link to="/contato">Contatos</Link>
        </div>
    )
}