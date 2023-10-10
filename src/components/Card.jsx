
import { useState, useEffect } from 'react';

const Card = ({ item }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(item.url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
  }, [item])

  return (
    <div className="card">
      <div className="card-image">
        <img src={data && data.sprites.other.home.front_default} alt="" />
      </div>
      <div className="card-name">
        {data && data.name}
      </div>
    </div>
  )
}

export default Card;