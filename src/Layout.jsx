
import Footer from './components/Footer/Footer';
import { Outlet, Link } from "react-router-dom";
import './style.scss';
import logo from './images/pokemon-logo.png';

const Layout = ({isShiny, setIsShiny, state, setState }) => {

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

  return (
    <>
      <div className='header-wrapper'>
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