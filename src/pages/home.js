import React from "react";

class Home extends React.Component{
    render(){
        return(
            <main>

    <section id="hero">
        <h1>Club Deportivo <br /> ECUATORIANO</h1>
        <button>Inscribete</button>
    </section>

    <section id="home">
        <div class="container">
            <div class="img-container"></div>
            <div class="texto">

                <h2>Somos <span class="color1"> Scorpions</span></h2>
                <p> Somos un Club de Basketball situado en Riobamba-Ecuador que busca motivar a los jovenes a interesarse por las actividades fisicas y deporte y dejar de lado el sedentarismo, o que incluso dejen las adicciones!</p>
            
            </div>
        </div>
    </section>

    <section id="ourclub">
        <div class="container">
            <h2>Practicas</h2>
            <div class="escenas">
                <div class="carta">
                    <h3>Dribbling Basketball</h3>
                    <p><br />El Dribbling en baloncesto es la habilidad de mover el balón con una mano al golpearlo contra el suelo. Es esencial para el control del balón, la creación de oportunidades ofensivas y la evasión de la defensa. Los jugadores deben desarrollar la técnica y el sentido del juego para aprovechar al máximo esta habilidad.</p>
                    <button>+ Info</button>
                </div>
                <div class="carta">
                    <h3>Crossovers Basketball</h3>
                    <p><br />El crossover en baloncesto es un movimiento ofensivo en el cual el jugador cambia rápidamente de dirección con el balón, pasándolo de una mano a la otra. Es una herramienta efectiva para eludir a los defensores y crear oportunidades ofensivas, pero requiere habilidad, velocidad y agilidad para ejecutarlo correctamente.</p>
                    <button>+ Info</button>
                </div>
                <div class="carta">
                    <h3>Dunks Basketball </h3>
                    <p><br />El dunk en baloncesto es una jugada en la cual un jugador salta y mete el balón en el aro con una o ambas manos. Es una muestra impresionante de fuerza y habilidad atlética, y proporciona una forma espectacular de anotar puntos. Aunque requiere habilidades físicas específicas, el dunk puede tener un impacto significativo en el juego y en el ánimo de los jugadores y los aficionados.</p>
                    <button>+ Info</button>
                </div>  
            </div>
        </div>
    </section>

    <section id="characteristics">
        <div class="container">
            <ul>
                <li>✔️ Private Courts</li>
                <li>✔️ Flexible schedules</li>
                <li>✔️ weekly tournaments</li>
                <li>✔️ NBA training</li>
            </ul>
        </div>
    </section>

    <section id="final">
        <h2>Listo para Entrenar?</h2>
        <button>Comienza Ahora!</button>
    </section>
 </main>
)
}
}

export default Home;