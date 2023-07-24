import React, { useEffect, useSate} from "react";
import {Link} from "react-router-dom"
const LeagueOfLegends = () => {
  return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">League Of Legends</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Valorant'>Valorant</Link>
                             </li>
                             <li className="nav-item">
                                <Link className="nav-link" to='/Factorial'>Factorial</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
      <div className="lol">
        <header>
        <center><h1>League Of Legends</h1></center>
        </header>
      <main>
                <article>
                    <div className='container my-3'>
                        <div id='carouselExampleCaptions' className='carousel slide' data-bs-ride="carousel">
                            <div className='carousel-indicators'>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className='carousel-inner'>
                                <div className='carousel-item active'>
                                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                        <div className='carousel-indicators'>
                                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        </div>
                                        <div className="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src="./lol3.jpg" className="d-block w-100" alt="publico"/>
                                            </div>
                                            <div class="carousel-item">
                                                <img src="./lol1.jpg" className="d-block w-100" alt="juegos"/>
                                            </div>
                                            <div class="carousel-item">
                                                <img src="./lol2.jpg" className="d-block w-100" alt="equipos"/>
                                            </div>
                                        </div>
                                        <button className='carousel-control-prev' type='button' data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                            <span className='carousel-control-prev-icon' aria-hidden="true" ></span>
                                            <span class="visually-hidden">Anterior</span>
                                        </button>
                                        <button className='carousel-control-next' type='button' data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                            <span className='carousel-control-next-icon' aria-hidden="true" ></span>
                                            <span class="visually-hidden">Siguiente</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Iniciar en League Of Legends
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>Como jugar League Of Legends:</strong>Accede a la web oficial de descarga de League of Legends. Asegúrate de que en el desplegable de la parte superior derecha de la página has seleccionado tu región. Después debes hacer clic donde pone "Descargar instalador para Mac/Windows", que se encuentra debajo del botón del centro para descargar!<code>.JUEGA YA!</code>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          ¿Cuál es la mejor línea para empezar a jugar lol?
          </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>Esta es la mejor linea para empezar a jugar.</strong><code> TOP:</code>Aquí vas a tener dos opciones bastante sencillas: Malphite y Sett.
              El primero es un tanque puro que cuenta con un kit de habilidades muy fácil de entender: Una habilidad para ralentizar a distancia.
              Un golpetazo en el suelo para hacer daño que escala con la habilidad. 
              Una habilidad activable para hacer daño en cono. Lo más importante es su definitiva, con la que podrás iniciar en las peleas grupales y levantar por los aires a los enemigos.
              En cuanto a Sett, es un offtank MUY fácil de usar: Con una habilidad, tus próximos dos básicos harán daño extra. Una habilidad para atraer al enemigo.
              Un cono de daño que además te proporcionará un útil escudo. Su definitiva es realmente útil para desposicionar a un enemigo si tienes un buen ángulo,
              además de para poder acercarte a algún campeón del rival que haga mucho daño..
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          ¿Qué tan difícil es LoL?
          </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>League of Legends es, sin duda, un juego difícil de dominar</strong> Incluso después de años de práctica, muchos jugadores se quedan estancados en el bronce o silver. La categoría gold sigue siendo, pues, una distancia inalcanzable. Pero el camino no está tan lejos como parece.<code>¡JUEGA YA!</code>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
    
  )
}

export default LeagueOfLegends;