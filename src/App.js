
import { useState, useEffect } from 'react';
import Card from "./components/Card";


function App() {
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setData(data.results);
      console.log(data.results);
    })
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      {data && data.map((item) => <Card item={item} />)}
    </div>
  );
}

export default App;
