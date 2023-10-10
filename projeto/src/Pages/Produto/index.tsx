import { Link, useParams } from "react-router-dom"

export function Produto(){
  const {id} = useParams();
  
    return(
        <div>
          <h1> Bem vindo a página Produto!</h1>
          <h2>{id}</h2>
          <br/><br/>
          <Link to="/">Ir para Home</Link>
          <br/><br/>
          <Link to="/sobre">Sobre</Link>
          <br/><br/>
           <Link to="/contato">Contatos</Link>
          <br/><br/>
        </div>
    )
}