import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "../components/Search";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://beers-api.edu.ironhack.com/beers")
      .then((response) => setBeers(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Bonus 5: si no quieres bonus, borra este useEffect y el state query.
    const endpoint =
      query.trim() === ""
        ? "https://beers-api.edu.ironhack.com/beers"
        : `https://beers-api.edu.ironhack.com/beers/search?q=${query}`;

    axios
      .get(endpoint)
      .then((response) => setBeers(response.data))
      .catch((error) => console.log(error));
  }, [query]);

  return (
    <>
      <Search value={query} onChange={(e) => setQuery(e.target.value)} />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers.map((beer) => (
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
                    alt={"image of " + beer.name}
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
