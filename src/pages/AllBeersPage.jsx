import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";

const API_URL = "https://beers-api.edu.ironhack.com/beers";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Ignore responses from stale requests (e.g. the user kept typing)
    let ignore = false;

    const url = query.trim()
      ? `${API_URL}/search?q=${encodeURIComponent(query.trim())}`
      : API_URL;

    axios
      .get(url)
      .then((response) => {
        if (!ignore) setBeers(response.data);
      })
      .catch((error) => console.log(error));

    return () => {
      ignore = true;
    };
  }, [query]);

  return (
    <>
      <Search query={query} onSearch={setQuery} />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers &&
          beers.map((beer) => {
            return (
              <div key={beer._id}>
                <Link to={"/beers/" + beer._id}>
                  <div
                    className="card m-2 p-2 text-center"
                    style={{ width: "24rem", height: "18rem" }}
                  >
                    <div className="card-body">
                      <img
                        src={beer.image_url}
                        style={{ height: "6rem" }}
                        alt={"image of" + beer.name}
                      />
                      <h5 className="card-title text-truncate mt-2">
                        {beer.name}
                      </h5>
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
