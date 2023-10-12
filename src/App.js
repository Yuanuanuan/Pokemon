
import { useState, useEffect } from 'react';
import Card from "./components/Card/Card";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PokemonCard from './components/PokemonCard/PokemonCard';
import './style.scss';


function App() {
  const [data, setData] = useState(null);
  const [isShiny, setIsShiny] = useState(false);
  const [nextUrl, setNextUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const fetchData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setData(data.results);
      setNextUrl(data.next);
      setPokemonInfo(data.results[5]);
    })
  }

  const nextData = () => {
    setIsLoading(true);
    fetch(nextUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setData((prevData) => [...prevData, ...data.results]);
      setNextUrl(data.next);
    })
    .then(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <Header isShiny={isShiny} setIsShiny={setIsShiny} />
      <div className='main-container'>
        <div className='main-container-wrapper flex'>
          <div className='cards-container'>
            <div className='cards flex'>
              {data && data.map(
                (item) => 
                <Card 
                key={item.name} 
                item={item}
                isShiny={isShiny} 
                />
              )}
            </div>
            <div className='learn-more flex'>
              {isLoading ?
                <div class="lds-facebook">
                  <div></div>
                  <div></div>
                  <div></div>
                </div> : 
               <button className='learn-more-btn' onClick={nextData}>Learn More</button>
               }
            </div>
          </div>
          <PokemonCard 
          data={pokemonInfo}
          isShiny={isShiny} 
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
