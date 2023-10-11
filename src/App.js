
import { useState, useEffect } from 'react';
import Card from "./components/Card/Card";
import './style.scss';


function App() {
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setData(data.results);
    })
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <div className='cards'>
        {data && data.map(
          (item) => <Card key={item.name} item={item} />
        )}
      </div>
    </div>
  );
}

export default App;
