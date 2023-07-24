import React, { useEffect, useSate} from "react";
import {Routes, Route,Link} from "react-router-dom";
import Inicio from './components/navegacion/Inicio'
import LeagueOfLegends from "./components/LeagueOfLegends";
import Valorant from "./components/Valorant";
import Factorial from "./components/Factorial"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/LeagueOfLegends" element={<LeagueOfLegends/>}/>
        <Route path="/Valorant" element={<Valorant/>}/>
        <Route path="/Factorial" element={<Factorial/>}/>
      </Routes>
    </div>
    
  )
}

export default App;
