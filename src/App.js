

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Favoritepage from "./pages/Favoritepage";
import Layout from "./Layout";


function App() {
  const [isShiny, setIsShiny] = useState(false);
  const [lovePokemon, setLovePokemon] = useState([]);
  const [loveUpdate, setLoveUpdate] = useState(false);
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [state, setState] = useState('home')


  const handleClick = (e) => {
    setPokemonInfo(e.target.dataset.url)
    const loveIcon = document.querySelector('.love-icon');
    const pokemonCard = document.querySelector('.pokemon-card-wrapper')

    loveIcon.classList.remove('active')
    if (lovePokemon.find((item) => item === pokemonInfo)) {
      loveIcon.classList.add('active')
    }

    pokemonCard.style.display = 'flex';
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={
            <Layout 
            isShiny={isShiny} 
            setIsShiny={setIsShiny} 
            state={state}
            setState={setState}
            />
          }>
            <Route index element={
              <Homepage 
              isShiny={isShiny}
              lovePokemon={lovePokemon}
              setLovePokemon={setLovePokemon}
              loveUpdate={loveUpdate}
              setLoveUpdate={setLoveUpdate}
              pokemonInfo={pokemonInfo}
              setPokemonInfo={setPokemonInfo}
              ClickCard={(e) => handleClick(e)}
              />
              }></Route>
            <Route path="/favorite" element={
              <Favoritepage 
              isShiny={isShiny}
              lovePokemon={lovePokemon}
              setLovePokemon={setLovePokemon}
              loveUpdate={loveUpdate}
              setLoveUpdate={setLoveUpdate}
              pokemonInfo={pokemonInfo}
              setPokemonInfo={setPokemonInfo}
              ClickCard={(e) => handleClick(e)}
              setState={setState}
              />
              }></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
