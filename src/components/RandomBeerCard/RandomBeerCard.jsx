import randomBeerImg from "../../assets/random-beer.png";


const RandomBeerCard = () => {
    return (
        <div className="card mb-2" style={{ width: "26rem" }}>
            <img src={randomBeerImg} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">Random Beer</h3>
                <p className="card-text">
                    Discover unique beers with intriguing details at random, one beer at a time.
                </p>
            </div>
        </div>
    )
}

export default RandomBeerCard