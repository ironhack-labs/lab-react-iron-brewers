import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import beersJSON from "./../assets/beers.json";
import axios from "axios";
import { useParams } from "react-router-dom";
function BeerDetailsPage() {
  const [beer, setBeer] = useState(beersJSON[0]);
  let { beerId } = useParams();

  const navigate = useNavigate();
  const getAllBeers = async () => {
    // event.preventDefault();

    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );

      if (response.status === 200) {
        console.log("Beer fetched successfully");
        setBeer(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error posting beer:", error);
      // Optionally handle errors, e.g., showing an error message to the user
    }
  };

  useEffect(() => {
    getAllBeers();
  }, [beerId]);
  // TASKS:

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
