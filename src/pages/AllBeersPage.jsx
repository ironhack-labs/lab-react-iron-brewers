import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "../components/Search";

const API_URL = "https://beers-api.edu.ironhack.com";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    const url = searchTerm ? `${API_URL}/beers/search` : `${API_URL}/beers`;
    const request = searchTerm
      ? axios.get(url, { params: { q: searchTerm } })
      : axios.get(url);

    request
      .then((response) => {
        if (isMounted) {
          setBeers(response.data);
          setError("");
        }
      })
      .catch(() => {
        if (isMounted) {
          setError("Could not load beers. Please try again.");
        }
      });

    return () => {
      isMounted = false;
    };
  }, [searchTerm]);

  return (
    <>
      <Search onSearch={setSearchTerm} searchTerm={searchTerm} />

      {error && <p role="alert" className="text-center">{error}</p>}
      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers &&
          beers.map((beer, i) => {
            return (
              <div key={i}>
                <Link to={"/beers/" + beer._id}>
                  <div className="card m-2 p-2 text-center" style={{ width: "24rem", height: "18rem" }}>
                    <div className="card-body">
                      <img
                        src={beer.image_url}
                        style={{ height: "6rem" }}
                        alt={"image of" + beer.name}
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
