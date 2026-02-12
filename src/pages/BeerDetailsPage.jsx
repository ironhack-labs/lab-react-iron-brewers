import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useBeerAPI from "../hooks/useBeerAPI";
import beersJSON from "./../assets/beers.json";
import axios from "axios";

const arrBeers = [
  "https://westernstageprops.com/cdn/shop/products/UB02-2.jpg?v=1695682844",
  "https://product-catalogue.alpla.com/sites/default/files/styles/product/public/2021-01/r1561-staropramen.jpg?itok=yLiMFX3g",
  "https://5.imimg.com/data5/SELLER/Default/2022/11/UG/YF/IJ/119533279/untitled-design-8--500x500.png",
  "https://www.ororabeverage.com/sites/default/files/2023-11/ag-118-r07-330ml-flint.png",
];

function BeerDetailsPage() {

  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();
  // React Router hook for navigation. We use it for the back button. You can leave this as it is.
  const navigate = useNavigate();


  useEffect(() => {
    const fetchSingleBeer = async () => {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers/" + beerId
        );

        setBeer(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSingleBeer();
  }, [beerId]);



  // TASKS:
  // 1. Get the beer ID from the URL, using the useParams hook.
  // 2. Set up an effect hook to make a request for the beer info from the Beers API.
  // 3. Use axios to make a HTTP request.
  // 4. Use the response data from the Beers API to update the state variable.



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
        </>
      )}
    </div>
  );
}

export default BeerDetailsPage;
