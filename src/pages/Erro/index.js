import { Link } from "react-router-dom";
import './erro.css';

function Erro(){
    return(
        <div className="erro">
            <h1>404</h1>
            <h2>Pagina não econtrada</h2>
            <Link to="/"> Tente aqui! </Link>
        </div>
    )
}
export default Erro;