import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    axios
      .get("https://beers-api.edu.ironhack.com/beers/random")
      .then((response) => {
        if (isMounted) {
          setRandomBeer(response.data.beer || response.data);
          setError("");
        }
      })
      .catch(() => {
        if (isMounted) {
          setError("Could not load a random beer. Please try again.");
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      <h2>Random Beer</h2>

      {error && <p role="alert">{error}</p>}
      {randomBeer && (
        <>
          <img
            src={randomBeer.image_url}
            alt="beer"
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
              navigate(-1);
            }}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default RandomBeersPage;
