import {Link} from 'react-router-dom'

export function NotFound(){
  return(
    <div>
       <h1>Essa página não existe!</h1>
       <br/><br/>
       <Link to="/">Acessar a página Home</Link>
    </div>

    )
}