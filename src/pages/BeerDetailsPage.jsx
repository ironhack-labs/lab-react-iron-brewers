import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = 'https://ih-beers-api2.herokuapp.com'

function BeerDetailsPage() {

  const { beerId } = useParams()

  const [beer, setBeer] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchBeer()
  }, [])

  const fetchBeer = () => {
    axios
      .get(`${API_URL}/beers/${beerId}`)
      .then(response => setBeer(response.data))
      .catch(err => console.log(err))
  }

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
