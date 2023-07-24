import React, { useEffect, useState} from "react";
import {Link} from "react-router-dom"

const Factorial=() =>{
    const[numero,setNumero] = useState('');
    const[factorial, setFactorial] = useState('');
    
    const calFactorial = () =>{
        const num = parseInt(numero);
        if (!isNaN(num)){
            let resultado = 1;
            for (let i = 1; i <=num; i++){
                resultado *=i;
            }
            setFactorial(resultado);
        } 
        else{
            setFactorial('Por Favor Ingrese un numero');
        }
    }
    const opcionNumeros = Array.from({length:30},(_, index) => index +1);
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">Factorial</a>
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
                            <Link className="nav-link" to='/Valorant'>Valorant</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <header>
            <center><h1>EJERCICIO FACTORIAL</h1></center>
        </header>
        <br/>
        <div>
            <input type="number" value={numero} onChange={(e) => setNumero(e.target.value)} placeholder="Ingrese un numero"/>   
        </div>
        <br/>
        <div>
            <select value={numero} onChange={(e) => setNumero(e.target.value)}>
                <option value="">Seleccione un número</option>
                {opcionNumeros.map((num) => (
                <option key={num} value={num}>
                    {num}
                </option>
                ))}
            </select>
      <br/>
      <br/>
      <button onClick={calFactorial}>Calcular Factorial</button>
      <br/>
      <br/>
      <p>Factorial: {factorial}</p>
    </div>
        </> 
    )
}

export default Factorial;


