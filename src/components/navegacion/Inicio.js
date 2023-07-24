import React from 'react'
import {Link} from 'react-router-dom'
import Cards from '../Cards.js'

const Inicio = () => {
    return (
        <div className='inicio'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Mundo de los Videos Juegos</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='LeagueOfLegends'>League of Legends</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='Valorant'>Valorant</Link>
                             </li>
                             <li className="nav-item">
                                <Link className="nav-link" to='/Factorial'>FACTORIAL</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header>
                <center><h1>Bienvenidos al mundo VideoJuegos</h1></center>
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
                                                <img src="./lol.jpg" className="d-block w-100" alt="publico"/>
                                            </div>
                                            <div class="carousel-item">
                                                <img src="./tft.jpeg" className="d-block w-100" alt="juegos"/>
                                            </div>
                                            <div class="carousel-item">
                                                <img src="./valorant.png" className="d-block w-100" alt="equipos"/>
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
            <div className='container2'>
                <div>
                    <Cards/>
                </div>
            </div>
        </div>

    )
  }
  
  export default Inicio;