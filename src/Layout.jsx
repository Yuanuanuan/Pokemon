
import Footer from './components/Footer/Footer';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import './style.scss';
import logo from './images/pokemon-logo.png';
import menuIcon from './icons/menu-icon.svg';
import closeIcon from './icons/close-icon.svg';

const Layout = ({isShiny, setIsShiny, state, setState }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    const toggleBtn = document.querySelector('.toggle-btn')
    if (!isShiny) {
      toggleBtn.innerText = 'QRIGINAL';
    } else {
      toggleBtn.innerText = 'SHINY';
    }
    setIsShiny(!isShiny);
  }

  const clickHome = () => {
    setState('home')
  }

  const clickFavorite = () => {
    setState('favorite')
  }

  const openMenu = () => {
    const tools = document.querySelector('.tools');

    if (!menuOpen) {
      tools.style.transform = 'scale(1, 1)'
      tools.style.opacity = '1'
      setMenuOpen(true);
    } else {
      tools.style.transform = 'scale(1, 0)'
      tools.style.opacity = '0'
      setMenuOpen(false);
    }

  }

  return (
    <>
      <div className='header-wrapper'>
        <div className='menu-icon' onClick={openMenu}>
          {
            menuOpen ? 
            <img src={closeIcon} alt="" /> : 
            <img src={menuIcon} alt="" />
          }
        </div>
        <div className='logo-icon'>
          <img src={logo} alt="" />
        </div>
        <div className='tools flex'>
          <Link to='/' className='link' onClick={clickHome}>
            <div className={`home ${state === 'home' ? 'active' : ''}`}>Home</div>
          </Link>
          <Link to='/favorite' className='link' onClick={clickFavorite}>
          <div className={`favorite ${state === 'favorite' ? 'active' : ''}`}>Favorite</div>
          </Link>
          <div className='toggle-btn' onClick={handleClick} >
            SHINY
          </div>
        </div>
      </div>
      <Outlet isShiny={isShiny} />
      <Footer />
    </>
  )
}

export default Layout;