import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get(
          "https://beers-api.edu.ironhack.com/beers"
        );
        setBeers(response.data);
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    };

    fetchBeers();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center p-4">
      <h2>All Beers</h2>
      <div className="w-75">
        {beers.map((beer) => (
          <Link to={`/beers/${beer._id}`} key={beer._id} className="text-decoration-none">
            <div className="card mb-3 p-3 d-flex flex-row align-items-center">
              <img src={beer.image_url} alt={beer.name} height="100px" width="auto" />
              <div className="ms-3">
                <h5>{beer.name}</h5>
                <p>{beer.tagline}</p>
                <small>Created by: {beer.contributed_by}</small>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllBeersPage;
