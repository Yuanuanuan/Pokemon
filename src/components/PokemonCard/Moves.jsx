


const Moves = ({ data }) => {
  return (
    <div className="moves-wrapper">
      <div className="moves-box">
        <div className="title">Moves</div>
        <div className="moves-content">
          {data.moves.map((move, index) => {
            return ( 
              <h3 key={index}>{move.move.name}</h3>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Moves;