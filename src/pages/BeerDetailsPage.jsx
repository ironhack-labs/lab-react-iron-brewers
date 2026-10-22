import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import beersJSON from "./../assets/beers.json";

function BeerDetailsPage() {
  // Initial mock state, replaced after API call
  const [beer, setBeer] = useState(beersJSON[0]);

  const navigate = useNavigate();
  const { beerId } = useParams();   // ⭐ 1. Get ID from URL

  useEffect(() => {
    // ⭐ 2. Make API request for this beer
    axios
      .get(`https://beers-api.edu.ironhack.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data);     // ⭐ 3. Save beer in state
      })
      .catch((error) => {
        console.error("Error fetching beer:", error);
      });
  }, [beerId]); // Runs again if the URL changes

  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
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
