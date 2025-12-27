import newBeerImg from "../../assets/new-beer.png";


const NewBeerCard = () => {
    return (
        <div className="card" style={{ width: "26rem" }}>
            <img src={newBeerImg} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">New Beer</h3>
                <p className="card-text">
                    Unleash your inner brewmaster and share your latest creation with the brewing community.
                </p>
            </div>
        </div>
    )
}

export default NewBeerCard