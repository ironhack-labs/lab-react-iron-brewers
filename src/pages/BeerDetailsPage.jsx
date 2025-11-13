import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  // State to store the beer info retrieved from the Beers API
  const [beer, setBeer] = useState(null);

  // React Router hook for navigation. Used for the back button.
  const navigate = useNavigate();

  const API_URL = "https://ih-beers-api2.herokuapp.com/beers";
  const { beerId } = useParams();

  // Effect hook to make a request for the beer info from the Beers API
  useEffect(() => {
    axios
      .get(`${API_URL}/${beerId}`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
