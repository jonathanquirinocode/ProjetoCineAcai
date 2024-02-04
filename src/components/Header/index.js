import { Link } from "react-router-dom"; 
import './header.css';


function Header(){
    return(
        <header className="header">
            <Link className="logo" to="/"> CineAçaí </Link>
            <Link className="mylist" to="/minhalista"> Minha Lista </Link>
        </header>
    )
}
export default Header;