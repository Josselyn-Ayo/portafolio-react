function QuienSoy(){
    return(
        <section id="about" className="about">
            <div className="about--content">
        <h2 className="about--title">¿Quien Soy?</h2>
        <p className="about--paragraph">Soy Josselyn Ayo, una persona que encuentra en la tecnología una froma de 
            crear y expresar su esencia. Mi camino no siempre ha sido fácil pero sé que no camino sola, 
            Dios es mi guía y mi fuerza en cada paso que doy. En los momentos de duda o dificultades,confío en que 
            Él me sostiene y me da la esperanza para seguir adelante. Mi pasión por aprender y superarme nace de esa 
            fe que me impulsa a non rendirme, a buscar siempre lo mejor y a creer que, con esfuerzo y con Dios a mi lado, puedo lograr
            todo lo que me proponga. Aspiro a ser una desarrolladora web que no solo construya proyectos, sino que en el propósito que Dios tiene en mí
            </p>
            <button className="about--button"><a href="https://github.com/Josselyn-Ayo" target="_blank">CURRICULUM VITAE</a></button>
             </div>
             <figure className="about--figure">
            <img src="https://www.unir.net/wp-content/uploads/2024/02/La-importancia-de-la-programacion-segura-o-desarrollo-seguro-de-software.jpg" className="about--picture" alt="Programación" />
           </figure>
        </section>
        
    );
}
export default QuienSoy;