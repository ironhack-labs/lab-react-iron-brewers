import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../components/Search";
// import beersJSON from "./../assets/beers.json"
import axios from "axios";

function AllBeersPage() {
  // Mock initial state, to be replaced by data from the API. Once you retrieve the list of beers from the Beers API store it in this state variable.
  const [loading, setLoading] = useState(false);
  const [beers, setBeers] = useState([]);
  const [copy, setCopy] = useState([]);
  // TASKS:
  // 1. Set up an effect hook to make a request to the Beers API and get a list with all the beers.
  // 2. Use axios to make a HTTP request.
  // 3. Use the response data from the Beers API to update the state variable.
  useEffect(() => {
    const getBeers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://beers-api.edu.ironhack.com/beers",
        );
        setBeers(response.data);
        setCopy(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getBeers();
  }, []);

  // The logic and the structure for the page showing the list of beers. You can leave this as it is for now.
  return (
    <>
      <Search setBeers={setBeers} copy={copy} />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {!loading ? (
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
                        src="https://thekegrepublic.com.au/cdn/shop/files/The-Keg-Republic-Better-Beer-Keg-50L.jpg?v=1747019761"
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
          })
        ) : (
          <p>loading</p>
        )}
      </div>
    </>
  );
}

export default AllBeersPage;
