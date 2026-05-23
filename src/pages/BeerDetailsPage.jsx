import { useState } from "react";
import { useNavigate } from "react-router-dom";
import beersJSON from "./../assets/beers.json";
import axios from "axios";

function BeerDetailsPage() {
  // Mock initial state, to be replaced by data from the Beers API. Store the beer info retrieved from the Beers API in this state variable.
  const [beer, setBeer] = useState(beersJSON[0]);

  // React Router hook for navigation. We use it for the back button. You can leave this as it is.
  const navigate = useNavigate();
  const { beerId } = useParams();
  useEffect(() => {
    axios
      .get(`https://ironhack.com{beerId}`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the beer details:", error);
      });
  }, [beerId]);
    
  if (!beer) {
    return <p>Loading beer details...</p>;
  }  



  // TASKS:
  // 1. Get the beer ID from the URL, using the useParams hook.
  // 2. Set up an effect hook to make a request for the beer info from the Beers API.
  // 3. Use axios to make a HTTP request.
  // 4. Use the response data from the Beers API to update the state variable.



  // Structure and the content of the page showing the beer details. You can leave this as it is:
  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center p-5">
      <img
        src={beer.image_url}
        alt="Beer Image"
        height="300px"
        className="mt-4"
      />
      <div className="mt-4" style={{ width: "300px" }}>
        <div className="d-flex justify-content-between align-items-baseline">
          <h2 className="text-start">{beer.name}</h2>
          <h2 className="text-muted text-end">{beer.attenuation_level}</h2>
        </div>
        <div className="d-flex justify-content-between align-items-baseline font-weight-light text-muted mb-3">
          <em className="text-start">{beer.tagline}</em>
          <span className="text-end">
            <b>{beer.first_brewed}</b>
          </span>
        </div>
        <p className="text-start">{beer.description}</p>
        <p className="text-start text-muted">
          <b>Created by:</b> {beer.contributed_by}
        </p>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
