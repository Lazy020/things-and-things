import {Link} from 'react-router-dom'

export function Contato(){
    return(
        <div>
            <h1> Bem vindo a página de contato</h1>
            <h3> Telefone: (XX) XXXX-XXXX</h3>
            <br/>
            <Link to="/">Ir para Home</Link>
        </div>
    )
}