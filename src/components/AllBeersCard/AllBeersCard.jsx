import beersImg from "../../assets/beers.png";


const BeerList = () => {
    return (
        <div className="card mb-2" style={{ width: "26rem" }}>
            <img src={beersImg} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">All Beers</h3>
                <p className="card-text">
                    Explore a collection of beers crafted by various brewers and breweries.
                </p>
            </div>
        </div>
    )
}

export default BeerList