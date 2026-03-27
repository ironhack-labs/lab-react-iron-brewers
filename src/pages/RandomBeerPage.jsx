import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";  // Make sure to import axios

function RandomBeersPage() {
  // State variable to store the random beer info retrieved from the Beers API.
  const [randomBeer, setRandomBeer] = useState(null);

  // React Router hook for navigation.
  const navigate = useNavigate();

  // Effect hook to fetch a random beer from the Beers API
  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random");
        setRandomBeer(response.data); // Update the state with the random beer data
      } catch (error) {
        console.error("Error fetching the random beer:", error);
      }
    };

    fetchRandomBeer(); // Call the function to fetch the beer
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // The structure for the page showing the random beer
  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      <h2>Random Beer</h2>

      {randomBeer ? (  // Conditional rendering based on whether randomBeer is set
        <>
          <img
            src={randomBeer.image_url}
            alt="beer"
            height="300px"
            width="auto"
          />
          <h3>{randomBeer.name}</h3>
          <p>{randomBeer.tagline}</p>
          <p>Attenuation level: {randomBeer.attenuation_level}</p>
          <p>Description: {randomBeer.description}</p>
          <p>Created by: {randomBeer.contributed_by}</p>

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1); // Navigate back when the button is clicked
            }}
          >
            Back
          </button>
        </>
      ) : (
        <p>Loading...</p> // Loading message while the beer data is being fetched
      )}
    </div>
  );
}

export default RandomBeersPage;
