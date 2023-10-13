import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Card from "../components/Card/Card";
import PokemonCard from '../components/PokemonCard/PokemonCard';

const Favoritepage = ({ 
  isShiny, 
  lovePokemon, 
  setLovePokemon, 
  loveUpdate, 
  pokemonInfo,
  setPokemonInfo,
  setLoveUpdate,
  ClickCard,
  setState
 }) => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    setData([]);
    if (lovePokemon) {
      lovePokemon.map(item => {
        return (
          fetch(item)
          .then((res) => res)
          .then((data) => {
            setData((prevData) => [...prevData, data]);
          })
        )
      })
    }
  }

  const handleClick = () => {
    setState('home')
  }

  useEffect(() => {
    fetchData();
    setPokemonInfo(lovePokemon[0]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lovePokemon])

  return (
    <div className='main-container'>
        {lovePokemon && lovePokemon.length > 0 ? 
        <div className='main-container-wrapper flex'>
          <div className='cards-container'>
            <div className='cards flex'>
              {data && data.map(
                (item) => 
                <Card 
                key={item.url} 
                item={item}
                isShiny={isShiny}
                onClick={(e) => ClickCard(e)}
                />
              )}
            </div>
          </div>
          <PokemonCard 
          data={pokemonInfo}
          isShiny={isShiny}
          lovePokemon={lovePokemon}
          setLovePokemon={setLovePokemon}
          loveUpdate={loveUpdate}
          setLoveUpdate={setLoveUpdate}
          />
        </div> :
        <div className='main-container-wrapper flex'>
          <div className='no-favorite'>
            <h1>You haven't added any likes yet.</h1>
            <h2>Go to find your favorite Pokemon!</h2>
            <button className='find-btn'>
              <Link to="/" className='link' onClick={handleClick}>
                Find
              </Link>
            </button>
          </div>
        </div>
        }
      </div>
  )
}

export default Favoritepage;