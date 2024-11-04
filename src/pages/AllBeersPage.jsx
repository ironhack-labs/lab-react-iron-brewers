import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import beersJSON from "./../assets/beers.json";
import axios from "axios"



function AllBeersPage() {
  // Mock initial state, to be replaced by data from the API. Once you retrieve the list of beers from the Beers API store it in this state variable.
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");



    
  // TASKS:
  // 1. Set up an effect hook to make a request to the Beers API and get a list with all the beers.
  useEffect (() => {
  // 2. Use axios to make a HTTP request.
    const fetchBeers = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
      
       
  // 3. Use the response data from the Beers API to update the state variable.
      setBeers(response.data);
    } catch (error) {
      console.error('Error', error);
    }
  };
  fetchBeers();
 },[]);
  //el primer corchete cierra despues de arrow func, el array
  //vacio en ssegundo argumento es para que se ejecute solo una 
  // una vez cuando el componente se monta


  //////FOR THE SEARCHHH
  const handleSearch = async (query) => {
    setSearchTerm(query); // Actualizamos el estado del término de búsqueda
    if (query) {
      try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`);
        setBeers(response.data); // Actualizamos 
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      // Si el input vacio ent todas las cervezas
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
      setBeers(response.data);
    }
  };


  
  // The logic and the structure for the page showing the list of beers. You can leave this as it is for now.
  return (
    <>
      <Search onSearch={handleSearch} />

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
