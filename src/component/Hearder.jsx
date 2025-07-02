import { Link } from "react-router-dom";
import Main from "./Main";
function Hearder() {
  return (
    <header>
        <nav className="navbar--container">
            <p className="navbar--logo">Anabel🦋</p>
            <ul className="navbar--menu">
                <li><Link to="/inicio">Inicio</Link></li>
                <li><Link to="/proyectos">Proyectos</Link></li>
                <li><Link to="/experticia">Experticia</Link></li>
                <li><Link to="/experiencias">Experiencias</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>

            </ul>

        </nav>
        <Main/>
    </header>
  );
}
export default Hearder;