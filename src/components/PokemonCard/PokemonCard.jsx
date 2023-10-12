
import { useState, useEffect } from 'react';
import './style.scss';
import About from './About';
import Moves from './Moves';

const PokemonCard = ({ data, isShiny, lovePokemon }) => {
  const [info, setInfo] = useState(null);
  const [nav, setNav] = useState('about');
  

  const clickLove = (e) => {
    const favorite = JSON.parse(localStorage.getItem('pokemon')) || [];
    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active');
      const removeData = favorite.filter((item) => item !== data);
      localStorage.setItem('pokemon', JSON.stringify(removeData));
    } else {
      e.target.classList.add('active');
      if (!favorite.find((item) => item === data)) {
        favorite.push(data);
        localStorage.setItem('pokemon', JSON.stringify(favorite));
      }
    }
  }

  const clickNav = (e) => {
    setNav(e.target.classList[0])
  }

  useEffect(() => {
    const getPokemonInfo = () => {
      if (data) {
        fetch(data)
        .then((res) => res.json())
        .then((data) => {
          setInfo(data);
        })
      }
    };

    getPokemonInfo();
  }, [data])

  return (
    <>
      {info &&
      <div className="pokemon-card-wrapper">
        <div className={`pokemon-card-box flex ${info.types[0].type.name}`}>
          <div className='box-top'>
            <div className='header'>
              <div className='name'>{info.name}</div>
              <div className={`love-icon ${lovePokemon.find((item) => item === data) ? 'active' : ''}`} onClick={(e) => clickLove(e)}>
                <svg viewBox="0 0 24 24" fill="none">
                  <g strokeWidth="0"></g>
                  <g strokeLinecap="round" strokeLinejoin="round"></g>
                  <g>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#f5f6f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className='types-id'>
              <div className='types'>
                {info.types.map((type, index) => {
                  return (
                  <div className='type' key={index}>
                    {type.type.name}
                  </div>
                  )
                })
                }
              </div>
              <div className='id'>
                {
                info.id.toString().length === 1 ? 
                `#000${info.id}` :
                info.id.toString().length === 2 ? 
                `#00${info.id}` :
                info.id.toString().length === 3 ? 
                `#0${info.id}` : 
                `#${info.id}`
                }
              </div>
            </div>
            <div className='pokemon-image'>
              <img src={
                isShiny ? 
                info.sprites.other.home.front_shiny : 
                info.sprites.other.home.front_default
                } alt="" />
            </div>
            <div className='pokemon-ball'>
              <div className={`ball-inside ${info.types[0].type.name}`}></div>
              <div className={`ball-outside ${info.types[0].type.name}`}></div>
            </div>
          </div>
          <div className='box-bottom'>
            <div className='navBar'>
              <div className='nav-box' onClick={clickNav}>
                <div className={`about ${nav === 'about' ? 'active' : null}`}>About</div>
                <div className={`moves ${nav === 'moves' ? 'active' : null}`}>Moves</div>
              </div>
            </div>
            <div className='info-content'>
              {nav === 'about' ?
              <About data={info} /> :
              <Moves data={info} />
              }
            </div>
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default PokemonCard;

// types: data.types[0].type.name

// id: data.id