function Project(){
    return(
        <section id="portafolio" className="project">
            <h3 className="project--title">Mis Proyectos</h3>
            <div className="project--box">
                <div className="projectbox--container">
                    <img src="https://museovangogh.org/wp-content/uploads/2021/11/vangoghmuseum-s0176V1962-800.jpg" className="projectbox--img" alt="Foto1" />
                <div className="projectbox--info">
                    <h4 className="projectbox--title">Hoja de Vida</h4>
                    <p className="project--text"> Este proyecto es una hoja de vida digital en formato web, donde presento mi
                        información personal, habilidades, estudios, experiencia y aspiraciones profesionales.
                        Está diseñado con React y estilos modernos para facilitar su visualización desde cualquier dispositivo.

                    </p>
                    <div className="projectbox--links">
                        <button><a href="https://github.com/Josselyn-Ayo/HojaVida." target="_blank">MÁS INFORMACIÓN</a></button>

                    </div>

                </div>

                </div>
                <div className="projectbox--container">
                    <img src="https://museovangogh.org/fondosdepantalla/noche%20estrellada.jpg"className="projectbox--img" alt="Foto2" />
                    <div className="projectbox--info">
                    <h4 className="projectbox--title">Formuario de Notas</h4>
                    <p className="project--text"> Aplicación desarrollada en Java con interfaz gráfica que permite registrar las calificaciones de estudiantes, calcular promedios y visualizar los resultados de forma clara. Ideal para prácticas escolares.
                    </p>
                    <div className="projectbox--links">
                        <button><a href="https://github.com/Josselyn-Ayo/Formulario_Notas" target="_blank">MÁS INFORMACIÓN</a></button>
                </div>
                </div>
                </div>
                <div className="projectbox--container">
                    <img src="https://p4.wallpaperbetter.com/wallpaper/967/384/937/road-clouds-green-vincent-van-gogh-wheat-fields-hd-wallpaper-preview.jpg"className="projectbox--img" alt="Foto2" />
                    <div className="projectbox--info">
                    <h4 className="projectbox--title">Interfaz Gráfica</h4>
                    <p className="project--text"> Es un proyecto personal en Java con interfaz gráfica, donde creé un formulario para ingresar notas y calcular promedios de estudiantes.
                    </p>
                    <div className="projectbox--links">
                        <button><a href="https://github.com/Josselyn-Ayo/InterfazGrafica-Josselyn-Ayo" target="_blank">MÁS INFORMACIÓN</a></button>
                </div>
                </div>
                </div>


            </div>

        </section>
    )

}
export default Project;