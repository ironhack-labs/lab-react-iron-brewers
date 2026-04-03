import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [allBeers, setAllBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (search === "") {
      setBeers(allBeers);
    } else {
      setBeers(
        allBeers.filter((beer) =>
          beer.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, allBeers]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((response) => {
        if (response.status === 200) {
          setBeers(response.data);
          setAllBeers(response.data);
        } else {
          console.log("Beer not found");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Search search={search} handleChange={handleChange} />

      {loading && <h1>Loading...</h1>}

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers &&
          beers.map((beer, i) => {
            return (
              <div key={i}>
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
