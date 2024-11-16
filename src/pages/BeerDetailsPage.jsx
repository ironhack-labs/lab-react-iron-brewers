import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Add useParams
import fetchWrapper from "../utils/fetchWrapper";

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();
  const { beerId } = useParams();

  useEffect(() => {
    loadBeerDetails();
  }, [beerId]);

  const loadBeerDetails = async () => {
    const { data, error } = await fetchWrapper.get(`/beers/${beerId}`);
    
    if (error) {
      setError(error);
      setBeer(null);
    } else {
      setBeer(data);
      setError(null);
    }
  };


  if (error) {
    return (
      <div className="alert alert-danger m-3">
        Error loading beer details: {error}
      </div>
    );
  }

  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      {beer && (
        <>
          <img
            src={beer.image_url}
            alt={`${beer.name} beer`}
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
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default BeerDetailsPage;