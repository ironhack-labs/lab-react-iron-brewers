import { Route, Routes } from "react-router-dom"

import AllBeersPage from "../pages/AllBeersPage";
import RandomBeerPage from "../pages/RandomBeerPage";
import AddBeerPage from "../pages/AddBeerPage";
import BeerDetailsPage from "../pages/BeerDetailsPage";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
    return (
        <div className="AppRoutes">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/beers" element={<AllBeersPage />} />
                <Route path="/random-beer" element={<RandomBeerPage />} />
                <Route path="/new-beer" element={<AddBeerPage />} />
                <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
            </Routes>
        </div >
    )
}

export default AppRoutes