

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404";
import Favoritepage from "./pages/Favoritepage";
import Layout from "./Layout";


function App() {
  const [isShiny, setIsShiny] = useState(false);
  const [lovePokemon, setLovePokemon] = useState([]);
  const [loveUpdate, setLoveUpdate] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Layout isShiny={isShiny} setIsShiny={setIsShiny} />}>
            <Route index element={
              <Homepage 
              isShiny={isShiny}
              lovePokemon={lovePokemon}
              setLovePokemon={setLovePokemon}
              loveUpdate={loveUpdate}
              setLoveUpdate={setLoveUpdate}
              />
              }></Route>
            <Route path="/favorite" element={
              <Favoritepage 
              isShiny={isShiny}
              lovePokemon={lovePokemon}
              setLovePokemon={setLovePokemon}
              loveUpdate={loveUpdate}
              setLoveUpdate={setLoveUpdate}
              />
              }></Route>
            <Route path="*" element={<Page404 />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
