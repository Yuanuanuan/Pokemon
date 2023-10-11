
import { useState, useEffect } from 'react';
import './style.scss';

const Card = ({ item, isShiny }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(item.url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
  }, [item])

  return (
    <>
      {data && 
      <div className={`card ${data.types[0].type.name}`}>
        <div className='pokemon-info'>
          <div className="pokemon-name">
            {data.name.slice(0, 1).toUpperCase() + data.name.slice(1)}
          </div>
          <div className='pokemon-types'>
            {data.types.map((type, index) => 
              <div className='pokemon-type' key={index}>
                {type.type.name}
              </div>
            )}
          </div>
        </div>
        <div className="pokemon-image flex">
          <img src={
            isShiny ? 
            data.sprites.other.home.front_shiny : 
            data.sprites.other.home.front_default
            } alt="" />
        </div>
        <div className='pokemon-ball'>
          <div className={`ball-inside ${data.types[0].type.name}`}></div>
          <div className={`ball-outside ${data.types[0].type.name}`}></div>
        </div>
      </div>
      }
    </>
  )
}

export default Card;