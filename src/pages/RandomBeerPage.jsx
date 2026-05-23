import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  
  useEffect(() => {
    axios
      .get("https://beers-api.edu.ironhack.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((error) => {
        console.error("Error fetching a random beer:", error);
      });
  }, []);

  
  if (!randomBeer) {
    return <p>Loading a random beer...</p>;
  }

  
  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center p-5">
      <img
        src={randomBeer.image_url}
        alt="Beer Image"
        height="300px"
        className="mt-4"
      />
      <div className="mt-4" style={{ width: "300px" }}>
        <div className="d-flex justify-content-between align-items-baseline">
          <h2 className="text-start">{randomBeer.name}</h2>
          <h2 className="text-muted text-end">{randomBeer.attenuation_level}</h2>
        </div>
        <div className="d-flex justify-content-between align-items-baseline font-weight-light text-muted mb-3">
          <em className="text-start">{randomBeer.tagline}</em>
          <span className="text-end">
            <b>{randomBeer.first_brewed}</b>
          </span>
        </div>
        <p className="text-start">{randomBeer.description}</p>
        <p className="text-start text-muted">
          <b>Created by:</b> {randomBeer.contributed_by}
        </p>
      </div>
    </div>
  );
}

export default RandomBeerPage;
