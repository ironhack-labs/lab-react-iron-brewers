import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import beersJSON from "./../assets/beers.json";

const arrBeers = [
  "https://westernstageprops.com/cdn/shop/products/UB02-2.jpg?v=1695682844",
  "https://product-catalogue.alpla.com/sites/default/files/styles/product/public/2021-01/r1561-staropramen.jpg?itok=yLiMFX3g",
  "https://5.imimg.com/data5/SELLER/Default/2022/11/UG/YF/IJ/119533279/untitled-design-8--500x500.png",
  "https://www.ororabeverage.com/sites/default/files/2023-11/ag-118-r07-330ml-flint.png",
];

function AllBeersPage() {

  const [beers, setBeers] = useState(null);
  const [backup, setBackup] = useState(null);

  const options = {
    endPoint: endpoint,
    method: "GET",
  };

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );

        setBeers(response.data);
        setBackup(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBeers();
  }, []);

  return (
    <>
      <Search setEndpoint={setEndpoint} />
      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers.map((beer, i) => {
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
