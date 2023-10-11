
import './style.scss';
import logo from '../../images/pokemon-logo.png'

const Header = ({ isShiny, setIsShiny }) => {
  
  const handleClick = () => {
    setIsShiny(!isShiny);
    console.log(isShiny);
  }
  
  return (
    <div className='header-wrapper'>
      <div className='logo-icon'>
        <img src={logo} alt="" />
      </div>
      <div className='toggle-btn' onClick={handleClick} >
        SHINY
      </div>
    </div>
  )
}

export default Header;