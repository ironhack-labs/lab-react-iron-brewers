import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "../components/Search";
//import beersJSON from "./../assets/beers.json"; //mock data
import axios from 'axios';

function AllBeersPage() {
  const [beers, setBeers] = useState();
  //api call async await
  /* useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await fetch('https://ih-beers-api2.herokuapp.com/beers');
        const data = await response.json();
        //console.log('beers: ', data);
        setBeers(data);

      } catch (error) {
        console.log(error);
      }
    };
    fetchBeers();
  }, []); */

  //api call async await with axios
  /*   useEffect(() => {
      const fetchBeers = async () => {
        try {
          const { data } = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
          setBeers(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchBeers();
    }, []); */

  //api call fetch.then with axios
  useEffect(() => {
    axios(`https://ih-beers-api2.herokuapp.com/beers`)
      .then(response => setBeers(response.data))
      .catch(err => console.log(err));
  }, []);
  //search
  const [searchParams, setSearchParams] = useSearchParams();
  const beerToSearch = searchParams.get('q');

  function filterBeersOnChange() {
    e.preventDefault();
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${beerToSearch}`)
      .then(response => setBeers(response.data))
      //setSearchParams(pre => pre + beerToSearch)
      .catch(err => console.log(err));
  }

  // The logic and the structure for the page showing the list of beers. You can leave this as it is for now.
  return (
    <>
      <Search onChange={filterBeersOnChange} searchParams={searchParams} setSearchParams={setSearchParams} />

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
