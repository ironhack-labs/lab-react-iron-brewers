import { Link } from "react-router-dom";


import AllBeersCard from "../components/AllBeersCard/AllBeersCard.jsx";
import RandomBeerCard from "../components/RandomBeerCard/RandomBeerCard.jsx"
import NewBeerCard from "../components/NewBeerCard/NewBeerCard.jsx"

function HomePage() {

  // The home page showing the links to the 3 main pages of the app. You can leave this as it is.
  return (
    <>
      <div
        className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4"
      >
        <Link to="/beers">
          <AllBeersCard />
        </Link>
        <Link to="/random-beer">
          <RandomBeerCard />
        </Link>
        <Link to="/new-beer">
          <NewBeerCard />
        </Link>
      </div>
    </>
  );
}

export default HomePage;