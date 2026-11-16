import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { beerId } = useParams();

  useEffect(() => {
    let isMounted = true;

    axios
      .get(`https://beers-api.edu.ironhack.com/beers/${beerId}`)
      .then((response) => {
        if (isMounted) {
          setBeer(response.data.beer || response.data);
          setError("");
        }
      })
      .catch(() => {
        if (isMounted) {
          setError("Could not load this beer. Please try again.");
        }
      });

    return () => {
      isMounted = false;
    };
  }, [beerId]);

  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      {error && <p role="alert">{error}</p>}
      {beer && (
        <>
          <img
            src={beer.image_url}
            alt="Beer Image"
            height="300px"
            width="auto"
          />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>Attenuation level: {beer.attenuation_level}</p>
          <p>Description: {beer.description}</p>
          <p>Created by: {beer.contributed_by}</p>

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

export default BeerDetailsPage;
