

import './style.scss';
import searchIcon from '../../icons/search-icon.svg';

const Search = ({ inputValue, setInputValue, resultData, setResultData, setSearching }) => {
  const handleChange = (e) => {
    setInputValue(e.target.value);
    if(e.target.value === '') {
      setSearching(false);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue.toLowerCase()}`)
        .then((res) => res.json())
        .then((data) => {
          setResultData(data);
          setSearching(true);
        })
    }
  }

  return (
    <div className="search-wrapper flex">
      <div className="search-box flex">
        <div className="search-icon flex">
          <img src={searchIcon} alt="" />
        </div>
        <input type="text" className="search-input" placeholder='search pokemon...' onChange={handleChange} onKeyDown={handleKeyDown} />
      </div>
    </div>
  )
}

export default Search;