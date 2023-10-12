


const About = ({ data }) => {
  return (
    <div className="about-wrapper">
      <div className="about-box">
        <div className="stature-box">
          <h1 className="title">Stature</h1>
          <div className="height flexStart">
            <h1 className="text">Height : </h1>
            <div className="value">{data.height * 10} cm</div>
          </div>
          <div className="weight flexStart">
            <h1 className="text">Weight : </h1>
            <div className="value">
              {(data.weight / 100).toFixed(2)} kg
            </div>
          </div>
        </div>
        <div className="stats-box">
          <h1 className="title">Stats</h1>
          <div className="stats-info">
            {data.stats.map((stat, index) => {
              return (
              <div className="stat flexStart" key={index} >
                <h1 className="text">{stat.stat.name}</h1>
                <div className="value">{stat.base_stat}</div>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;

// 基礎經驗值: data.base_experience