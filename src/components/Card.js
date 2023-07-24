import React from 'react'
import {Link} from 'react-router-dom'

function Card(){
  return (
    <div className="card">
      <div className="card-header">
        VideoJuegos
      </div>
      <div className="card-body">
        <h5 className="card-title">¿Que es League Of Legends?</h5>
        <p className="card-text">League of Legends es un juego de estrategia por equipos en el que dos equipos conformados por cinco poderosos campeones se enfrentan para destruir la base del otro. Elige de entre más de 140 campeones para realizar jugadas épicas, asegurar asesinatos y destruir torretas mientras avanzas hacia la victoria.</p>
        <Link className="btn btn-primary" to="/LeagueOfLegends">Mas sobre League of Legends</Link>
      </div>
      <br/>
      <div className="card-body">
        <h5 className="card-title">¿Que es Valorant?</h5>
        <p className="card-text">Valorant es un shooter táctico donde dos equipos de cinco jugadores se enfrentan entre ellos. Además, los equipos deberán colocar una “bomba” en un lugar del mapa y los contrincantes tratarán de desactivarla antes de que pasen cuarenta y cinco segundos.</p>
        <Link className="btn btn-primary" to="/Valorant">Mas sobre Valorant</Link>
      </div>
      <br/>
      <div className="card-body">
        <h5 className="card-title">Ejercicio Calculo Factorial</h5>
        <p className="card-text">La función factorial es una fórmula matemática representada por el signo de exclamación “!”. En la fórmula Factorial se deben multiplicar todos los números enteros y positivos que hay entre el número que aparece en la fórmula y el número 1.</p>
        <Link className="btn btn-primary" to="/Factorial">Ejercicio Factorial</Link>
      </div>
    </div>
    
    )
  }
  
  export default Card;