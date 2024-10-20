import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import Search from "../components/Search";
import beersJSON from "./../assets/beers.json";

function AllBeersPage() {
  // State to hold beers
  const [beers, setBeers] = useState(beersJSON); // Initial state with mock data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Effect hook to fetch beers from the API
  useEffect(() => {
    const fetchBeers = async () => {
      try {
        // Make the API request
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
        // Update state with the fetched beers
        setBeers(response.data);
      } catch (err) {
        // Handle error
        setError("Error fetching beers");
        console.error(err);
      } finally {
        // Set loading to false once the request is done
        setLoading(false);
      }
    };

    fetchBeers(); // Call the fetch function
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Handle loading state
  if (loading) return <div>Loading...</div>;

  // Handle error state
  if (error) return <div>{error}</div>;

  // The logic and the structure for the page showing the list of beers
  return (
    <>
      <Search />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers.map((beer) => (
          <div key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <div className="card m-2 p-2 text-center" style={{ width: "24rem", height: "18rem" }}>
                <div className="card-body">
                  <img
                    src={beer.image_url}
                    style={{ height: "6rem" }}
                    alt={`Image of ${beer.name}`}
                  />
                  <h5 className="card-title text-truncate mt-2">{beer.name}</h5>
                  <h6 className="card-subtitle mb-3 text-muted">
                    <em>{beer.tagline}</em>
                  </h6>
                  <p className="card-text">Created by: {beer.contributed_by}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllBeersPage;
