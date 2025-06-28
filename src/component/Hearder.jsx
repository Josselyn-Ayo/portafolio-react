import Main from "./Main";
function Hearder() {
  return (
    <header>
        <nav className="navbar--container">
            <p className="navbar--logo">Anabel🦋</p>
            <ul className="navbar--menu">
                <li><a href="#navbar">Inicio</a></li>
                <li><a href="#about">Sobre mí</a></li>
                <li><a href="#portafolio">Proyectos</a></li>
                <li><a href="#expert">Experticia</a></li>
                <li><a href="#contact"> Contacto</a></li>

            </ul>

        </nav>
        <Main/>
    </header>
  );
}
export default Hearder;