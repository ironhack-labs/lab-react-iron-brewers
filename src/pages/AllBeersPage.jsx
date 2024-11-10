import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../components/Search/Search.jsx"
import axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers/search"

function AllBeersPage() {
  // Mock initial state, to be replaced by data from the API. Once you retrieve the list of beers from the Beers API store it in this state variable.
  const [beers, setBeers] = useState([])
  const [filterBeers, setFilterBeeers] = useState([])
  const [searchQuery, setSearchQuery] = useState('')


  useEffect(() => {

    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        setBeers(response.data)
        setFilterBeeers(response.data)
      })
      .catch(err => console.log(err))

  }, [])

  const handleSearch = (query) => {
    setSearchQuery(query)
    if (query) {
      axios
        .get(`${API_URL}?q=${query}`)
        .then((response) => {
          setFilterBeeers(response.data)
        })
        .catch((err) => console.log(err))
    } else {
      setFilterBeeers(beers)
    }
  }

  return (
    <>
      <Search onSearch={handleSearch} />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {filterBeers &&
          filterBeers.map((beer) => {
            return (
              <div key={beer._id}>
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
