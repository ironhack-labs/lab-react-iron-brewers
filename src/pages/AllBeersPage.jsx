import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";

function AllBeersPage() {
  // Mock initial state, to be replaced by data from the API. Once you retrieve the list of beers from the Beers API store it in this state variable.
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBeers, setFilteredBeers] = useState([]);

  // TASKS:
  // 1. Set up an effect hook to make a request to the Beers API and get a list with all the beers.
  // 2. Use axios to make a HTTP request.
  // 3. Use the response data from the Beers API to update the state variable.
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
        setFilteredBeers(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query); 
    if (query) {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
        .then((response) => {
          setFilteredBeers(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      setFilteredBeers(beers);
    }
  };

  return (
    <>
      <Search query={searchQuery} onSearch={handleSearch} />
      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {filteredBeers.map((beer) => (
          <div key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <div
                className="card m-2 p-2 text-center"
                style={{ width: "24rem", height: "18rem" }}
              >
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
