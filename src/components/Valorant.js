import React, { useEffect, useState} from "react";
import {Link} from "react-router-dom"


const Valorant =() =>{
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Valorant</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to='/'>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/LeagueOfLegends'>League Of Legends</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/Factorial'>Factorial</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="Valorant">
      <header>
        <center><h1>Valorant</h1></center>
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
                      <img src="./valo3.jpg" className="d-block w-100" alt="publico"/>
                    </div>
                    <div class="carousel-item">
                      <img src="./valo4.jpg" className="d-block w-100" alt="juegos"/>
                    </div>
                    <div class="carousel-item">
                      <img src="./valo2.jpg" className="d-block w-100" alt="equipos"/>
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
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  ¿De qué trata el juego?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                  <div class="accordion-body">
                    <strong>Es un juego de shooter.</strong> Valorant es un hero shooter en primera persona multijugador gratuito desarrollado y publicado por Riot Games. El juego se anunció por primera vez con el nombre en clave Project A en octubre de 2019. Fue lanzado para Microsoft Windows el 2 de junio de 2020 después de su beta cerrada lanzada el 7 de abril de 2020. Valorant se inspira en la serie de videojuegos de disparos táctico Counter-Strike y toma prestadas varias mecánicas, como el menú de compra, los patrones de spray y la imprecisión al moverse. <code>ATREVETE</code>, registrate en su pagina oficial.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  ¿Cómo se debe jugar Valorant?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div class="accordion-body">
                    <strong>Los mejores consejos para ser un pro de Valorant: </strong> <br/>
                    1: No te olvides de calentar. ...
                    <br/>
                    2: La clave está en la cabeza. ...
                    <br/>
                    3: Apréndete el camino de memoria y sé sigiloso. ...
                    <br/>
                    4: Piensa tus compras. ...
                    <br/>
                    5: El radar está para algo. ...
                    <br/>
                    6: Las habilidades, tus mejores aliadas. ...
                    <br/>
                    7: La comunicación es importante. ...
                    <br/>
                    8: El cuchillo sirve de bastante. ...
                    <br/>
                    <code>NO ES DIFICIL</code>
                  </div>
                </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                ¿Cómo jugar Valorant?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                  <strong>Como descargar Valorant: </strong> Entra en la web oficial de Valorant y pulsa sobre el botón "Jugar ya". Tendrás que crear una cuenta de Riot Games o iniciar sesión. Entra directamente en este enlace de descarga y pulsa en el botón "Descargar".<code>DESCARGA</code>
                </div>
              </div>
            </div>
          </div>
    </div>
    </>
  )
}

export default Valorant;