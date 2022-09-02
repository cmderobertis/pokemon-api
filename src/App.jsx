import React, { useState } from "react"
import "./cyborg_bootstrap.css"

function App() {
  const [pokes, setPokes] = useState([])

  const handleClick = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1200")
      .then((response) => response.json())
      .then((response) => setPokes(response.results))
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <button onClick={handleClick} className="btn btn-primary">
            Get Pokémon
          </button>
          <div className="row row-cols-6 g-3">
            {pokes.length &&
              pokes.map((poke, index) => {
                return (
                  <div className="col btn btn-info me-3" key={index}>
                    {poke.name}
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
