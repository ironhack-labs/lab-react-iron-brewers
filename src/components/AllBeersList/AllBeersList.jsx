import { useEffect, useState } from "react";
import axios from "axios";

import BeerCard from "../BeerCard/BeerCard";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers"

const AllBeerList = () => {
    // Mock initial state, to be replaced by data from the API. Once you retrieve the list of beers from the Beers API store it in this state variable.

    // TASKS:
    // 1. Set up an effect hook to make a request to the Beers API and get a list with all the beers.
    // 2. Use axios to make a HTTP request.
    // 3. Use the response data from the Beers API to update the state variable.

    // The logic and the structure for the page showing the list of beers. You can leave this as it is for now.

    const [beers, setBeers] = useState([]);

    useEffect(() => {
        fetchAllBeersData()
    }, [])


    const fetchAllBeersData = () => {
        axios
            .get(API_URL)
            .then(response => setBeers(response.data))
            .catch(err => console.log(err))
    }

    return (
        <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
            {
                beers.map(elm => {
                    return (
                        <BeerCard key={elm._id} {...elm} />
                    );
                })
            }
        </div>
    )
}

export default AllBeerList