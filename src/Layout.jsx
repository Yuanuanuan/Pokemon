
import Footer from './components/Footer/Footer';
import { Outlet, Link } from "react-router-dom";
import './style.scss';
import logo from './images/pokemon-logo.png';

const Layout = ({isShiny, setIsShiny}) => {

  const handleClick = () => {
    const toggleBtn = document.querySelector('.toggle-btn')
    if (!isShiny) {
      toggleBtn.innerText = 'QRIGINAL';
    } else {
      toggleBtn.innerText = 'SHINY';
    }
    setIsShiny(!isShiny);
  }

  return (
    <>
      <div className='header-wrapper'>
        <div className='logo-icon'>
          <img src={logo} alt="" />
        </div>
        <div className='tools flex'>
          <Link to='/' className='link'>
            <div className='Home'>Home</div>
          </Link>
          <Link to='/favorite' className='link'>
          <div className='favorite'>Favorite</div>
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