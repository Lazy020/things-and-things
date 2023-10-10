import {Link} from 'react-router-dom'


export function Home(){
  return(
    <>
    <div>
       <h1> Bem vindo a página Home!</h1>
       <span> Essa é nossa primeira página com navegação</span>
       <br/><br/>
       <Link to="/sobre">Sobre</Link>
       <br/><br/>
       <Link to="/contato">Contatos</Link>
       <br/><br/>
       <Link to="/produto">Produtos</Link>
    </div>
    </>
    )
}