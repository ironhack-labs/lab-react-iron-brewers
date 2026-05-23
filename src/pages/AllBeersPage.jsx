import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import beersJSON from "./../assets/beers.json";
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState(beersJSON);
  // 1. Add state to hold the live search query string
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // 2. Adjust url dynamically depending on whether a search query exists
    let url = "https://beers-api.edu.ironhack.com/beers";
    if (searchQuery) {
      url = `https://ironhack.com{searchQuery}`;
    }

    axios
      .get(url)
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from Beers API:", error);
      });
  }, [searchQuery]); // 3. Re-run this effect every single time searchQuery changes

  // 4. Callback handler to pass into your Search component
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      {/* 5. Pass state value and trigger function down as props */}
      <Search query={searchQuery} onSearchChange={handleSearchChange} />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers &&
          beers.map((beer) => {
            return (
              <div key={beer._id}>
                <Link to={"/beers/" + beer._id}>
                  <div className="card m-2 p-2 text-center" style={{ width: "24rem", height: "18rem" }}>
                    <div className="card-body">
                      <img
                        src={beer.image_url}
                        style={{ height: "6rem" }}
                        alt={"image of " + beer.name}
                      />
                      <h5 className="card-title text-truncate mt-2">{beer.name}</h5>
                      <h6 className="card-subtitle mb-3 text-muted">
                        <em>{beer.tagline}</em>
                      </h6>
                      <p className="card-text">
                        Created by: {beer.contributed_by}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default AllBeersPage;
