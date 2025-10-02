import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../components/Search";

import axios from "axios";

function AllBeersPage() {
  // Mock initial state, to be replaced by data from the API. Once you retrieve the list of beers from the Beers API store it in this state variable.
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function getAllBeer() {
      try {
        const { data } = await axios.get(
          "https://beers-api.edu.ironhack.com/beers"
        );

        console.log(data);
        setBeers(data);
      } catch (err) {
        console.log(err);
      }
    }
    getAllBeer();
  }, []);
  //search
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function getQueryBeer() {
      try {
        const { data } = await axios.get(
          `https://beers-api.edu.ironhack.com/beers/search?q=${search}`
        );
        setSearch(data);
      } catch (err) {
        console.log(err);
      }
    }
    getQueryBeer();
  }, [search]);

  // TASKS:
  // 1. Set up an effect hook to make a request to the Beers API and get a list with all the beers.
  // 2. Use axios to make a HTTP request.
  // 3. Use the response data from the Beers API to update the state variable.

  // The logic and the structure for the page showing the list of beers. You can leave this as it is for now.
  return (
    <>
      <Search search={search} setSearch={setSearch} />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers &&
          beers
            .filter((onebeer) => {
              if (onebeer.name.toLowerCase().includes(search.toLowerCase())) {
                return true;
              }
            })
            .map((onebeer) => {
              return (
                <div key={onebeer._id}>
                  <Link to={"/beers/" + onebeer._id}>
                    <div
                      className="card m-2 p-2 text-center"
                      style={{ width: "24rem", height: "18rem" }}
                    >
                      <div className="card-body">
                        <img
                          src={onebeer.image_url}
                          style={{ height: "6rem" }}
                          alt={"image of" + onebeer.name}
                        />
                        <h5 className="card-title text-truncate mt-2">
                          {onebeer.name}
                        </h5>
                        <h6 className="card-subtitle mb-3 text-muted">
                          <em>{onebeer.tagline}</em>
                        </h6>
                        <p className="card-text">
                          Created by: {onebeer.contributed_by}
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
