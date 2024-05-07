import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import beersJSON from "./../assets/beers.json";
import axios from "axios";
const ApiUrl = 'https://ih-beers-api2.herokuapp.com/beers'



function BeerDetailsPage() {
  const [beer, setBeer] = useState([]);

  const navigate = useNavigate();

  const { beerId } = useParams()

  useEffect(() => {
    loadBeersDetail()
  }, [])

  const loadBeersDetail = () => {
    axios
      .get(`${ApiUrl}/${beerId}`)
      .then(({ data }) => setBeer(data))
      .catch((err) => console.log(err))
  }




  // Structure and the content of the page showing the beer details. You can leave this as it is:
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
          ---------
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(`/edit/${beerId}`);
            }}
          >
            EDIT
          </button>
        </>
      )}
    </div>
  );
}

export default BeerDetailsPage;
