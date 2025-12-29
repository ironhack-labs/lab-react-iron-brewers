import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  // Initial state set to null
  const [beer, setBeer] = useState(null);

  // React Router hook for navigation
  const navigate = useNavigate();

  // Get beer ID from the URL parameters
  const { beerId } = useParams();
  
  // Log the beerId to verify
  console.log("Beer ID:", beerId);

  // Define the base URL for the API
  const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

  // Function to fetch beer details from the API
  const getBeer = () => {
    axios
      .get(`${API_URL}/${beerId}`)
      .then((response) => {
        console.log("API Response:", response.data); // Log the response to verify
        setBeer(response.data);
      })
      .catch((error) => console.log("API Error:", error));
  };

  // UseEffect to fetch beer details on component mount
  useEffect(() => {
    if (beerId) {
      getBeer();
    }
  }, [beerId]);

  // Structure and the content of the page showing the beer details
  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      {beer ? (
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BeerDetailsPage;
