import { Link } from "react-router-dom";

const BeerCard = ({ _id, image_url, name, tagline, contributed_by }) => {
    return (

        <Link to={`/beers/${_id}`}>


            <div className="card m-2 p-2 text-center" style={{ width: "24rem", height: "18rem" }}>
                <div className="card-body">
                    <img
                        src={image_url}
                        style={{ height: "6rem" }}
                        alt={"image of" + name}
                    />
                    <h5 className="card-title text-truncate mt-2">{name}</h5>
                    <h6 className="card-subtitle mb-3 text-muted">
                        <em>{tagline}</em>
                    </h6>
                    <p className="card-text">
                        Created by: {contributed_by}
                    </p>
                </div>
            </div>

        </Link>

    )
}

export default BeerCard
