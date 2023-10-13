
import { useState, useEffect } from 'react';
import Card from "../components/Card/Card";
import PokemonCard from '../components/PokemonCard/PokemonCard';
import Search from '../components/Search/Search';
import './_homepage.scss';

const Homepage = ({ 
  isShiny, 
  lovePokemon, 
  setLovePokemon,
  loveUpdate,
  setLoveUpdate,
  pokemonInfo,
  setPokemonInfo,
  ClickCard,
 }) => {
  const [data, setData] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [resultData, setResultData] = useState([]);
  const [searching, setSearching] = useState(false);

  const fetchData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then((res) => res.json())
    .then((data) => {
      setData(data.results);
      setNextUrl(data.next);
      setPokemonInfo(data.results[0].url);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const lovePokemon = JSON.parse(localStorage.getItem('pokemon'));
    if (lovePokemon) {
      setLovePokemon(lovePokemon);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonInfo, loveUpdate])

  return (
    <div className='main-container'>
        <div className='main-container-wrapper flex'>
          <div className='cards-container'>
            <Search 
            inputValue={inputValue} 
            setInputValue={setInputValue}
            resultData={resultData}
            setResultData={setResultData}
            setSearching={setSearching}
            />
            {searching ? 
            <div className='cards flex'>
              {resultData && 
                <Card 
                key={resultData.name} 
                item={{url :`https://pokeapi.co/api/v2/pokemon/${resultData.id}`}}
                isShiny={isShiny} 
                onClick={(e) => ClickCard(e)}
                />}
            </div> : 
            <div className='cards flex'>
              {data && data.map(
                (item) => 
                <Card 
                key={item.name} 
                item={item}
                isShiny={isShiny} 
                onClick={(e) => ClickCard(e)}
                />
              )}
            </div>
            }
            {searching ? null : 
            <div className='learn-more flex'>
              {isLoading ?
                <div className="lds-facebook">
                  <div></div>
                  <div></div>
                  <div></div>
                </div> : 
               <button className='learn-more-btn' onClick={nextData}>Learn More</button>
               }
            </div>}
          </div>
          <PokemonCard 
          data={pokemonInfo}
          isShiny={isShiny}
          lovePokemon={lovePokemon}
          setLovePokemon={setLovePokemon}
          loveUpdate={loveUpdate}
          setLoveUpdate={setLoveUpdate}
          searching={searching}
          resultData={resultData}
          />
        </div>
      </div>
  )
}

export default Homepage;