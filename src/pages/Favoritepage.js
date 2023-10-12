import { useState, useEffect } from 'react';
import Card from "../components/Card/Card";
import PokemonCard from '../components/PokemonCard/PokemonCard';

const Favoritepage = ({ isShiny, lovePokemon, setLovePokemon, loveUpdate, setLoveUpdate }) => {
  const [data, setData] = useState([]);
  const [first, setFirst] = useState(lovePokemon[lovePokemon.length - 1])

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

  useEffect(() => {
    fetchData();
    setFirst(lovePokemon[0]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lovePokemon])

  return (
    <div className='main-container'>
        <div className='main-container-wrapper flex'>
          <div className='cards-container'>
            <div className='cards flex'>
              {data && data.map(
                (item) => 
                <Card 
                key={item.url} 
                item={item}
                isShiny={isShiny}
                />
              )}
            </div>
          </div>
          <PokemonCard 
          data={first}
          isShiny={isShiny}
          lovePokemon={lovePokemon}
          setLovePokemon={setLovePokemon}
          loveUpdate={loveUpdate}
          setLoveUpdate={setLoveUpdate}
          />
        </div>
      </div>
  )
}

export default Favoritepage;