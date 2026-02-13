import { useState } from "react";
import { useNavigate } from "react-router-dom";
import beersJSON from "./../assets/beers.json";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function BeerDetailsPage() {
  const [beer, setBeer] = useState(beersJSON[0]);
  const navigate = useNavigate();
  // TASKS:
  // 1. Get the beer ID from the URL, using the useParams hook.
  // 2. Set up an effect hook to make a request for the beer info from the Beers API.
  // 3. Use axios to make a HTTP request.
  // 4. Use the response data from the Beers API to update the state variable.
  const { beerId } = useParams();
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data); //  Stocke la bière e
      })
      .catch((error) => {
        console.log("Err Beer Details:", error);
      });
  }, [beerId]);
}
export default BeerDetailsPage;