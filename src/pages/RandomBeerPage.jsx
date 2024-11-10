import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchRandomBeer();
  }, []);

  const fetchRandomBeer = () => {
    axios
      .get(`${API_URL}/random`)
      .then(response => setRandomBeer(response.data))
      .catch(err => console.log(err))
  };

  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      <h2>Random Beer</h2>

      {randomBeer && (
        <>
          <img
            src={randomBeer.image_url}
            alt={randomBeer.name}
            height="300px"
            width="auto"
          />
          <h3>{randomBeer.name}</h3>
          <p>{randomBeer.tagline}</p>
          <p>Attenuation level: {randomBeer.attenuation_level}</p>
          <p>Description: {randomBeer.description}</p>
          <p>Created by: {randomBeer.contributed_by}</p>

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1); // Go back to the previous page
            }}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default RandomBeerPage;
