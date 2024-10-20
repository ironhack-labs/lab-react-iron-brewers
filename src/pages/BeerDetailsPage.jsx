import { useState, useEffect } from "react"; // Import useEffect for fetching data
import { useNavigate, useParams } from "react-router-dom"; // Import useParams for getting the beer ID
import axios from "axios"; // Import axios for making HTTP requests
import beersJSON from "./../assets/beers.json";

function BeerDetailsPage() {
  // Initial state for beer details
  const [beer, setBeer] = useState(beersJSON[0]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track error status

  const navigate = useNavigate();
  const { id } = useParams(); // Get beer ID from URL

  useEffect(() => {
    const fetchBeerDetails = async () => {
      try {
        // Make a GET request to fetch beer details by ID
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
        setBeer(response.data); // Update the state with the beer data
      } catch (err) {
        setError("Failed to fetch beer details."); // Handle error
        console.error(err);
      } finally {
        setLoading(false); // Set loading to false once done
      }
    };

    fetchBeerDetails(); // Call the fetch function
  }, [id]); // Dependency array includes id

  // Structure and content of the page showing the beer details
  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      {loading ? ( // Show loading state while fetching
        <p>Loading...</p>
      ) : error ? ( // Show error message if there's an error
        <p>{error}</p>
      ) : (
        beer && (
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
                navigate(-1); // Navigate back to the previous page
              }}
            >
              Back
            </button>
          </>
        )
      )}
    </div>
  );
}

export default BeerDetailsPage;
