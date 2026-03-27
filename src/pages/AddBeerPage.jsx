import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = "https://ih-beers-api2.herokuapp.com/beers"

function AddBeerPage() {
  // State variables to store the values of the form inputs. You can leave these as they are.
  // const [name, setName] = useState("");
  // const [tagline, setTagline] = useState("");
  // const [description, setDescription] = useState("");
  // const [imageUrl, setImageUrl] = useState("");
  // const [firstBrewed, setFirstBrewed] = useState("");
  // const [brewersTips, setBrewersTips] = useState("");
  // const [attenuationLevel, setAttenuationLevel] = useState(0);
  // const [contributedBy, setContributedBy] = useState("");

  const [beerData, setBeerData] = useState({
    name: '',
    tagline: '',
    description: '',
    imageUrl: '',
    firstBrewed: '',
    brewersTips: '',
    attenuationLevel: 0,
    contributedBy: '',
  })

  const navigate = useNavigate()

  // Handler functions for the form inputs. You can leave these as they are.
  // const handleName = (e) => setName(e.target.value);
  // const handleTagline = (e) => setTagline(e.target.value);
  // const handleDescription = (e) => setDescription(e.target.value);
  // const handleImageUrl = (e) => setImageUrl(e.target.value);
  // const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  // const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  // const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  // const handleContributedBy = (e) => setContributedBy(e.target.value);

  const handleBeerData = e => {
    const { name, value } = e.target
    setBeerData({ ...beerData, [name]: value })
  }

  // TASK:
  // 1. Create a function to handle the form submission and send the form data to the Beers API to create a new beer.
  // 2. Use axios to make a POST request to the Beers API.
  // 3. Once the beer is created, navigate the user to the page showing the list of all beers.

  const handleFormSubmit = e => {
    e.preventDefault()

    axios
      .post(`${API_BASE_URL}/new`, beerData)
      .then(() => navigate("/beers"))
      .catch(err => console.log(err))
  }

  // Structure and the content of the page showing the form for adding a new beer. You can leave this as it is.
  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4">
        <form onSubmit={handleFormSubmit}>
          <label>Name</label>
          <input
            className="form-control mb-4"
            type="text"
            name="name"
            placeholder="Beer Name"
            value={beerData.name}
            onChange={handleBeerData}
          />
          <label>Tagline</label>
          <input
            className="form-control mb-4"
            type="text"
            name="tagline"
            placeholder="Beer Tagline"
            value={beerData.tagline}
            onChange={handleBeerData}
          />

          <label className="form-label">Description</label>
          <textarea
            className="form-control mb-4"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            value={beerData.description}
            onChange={handleBeerData}
          ></textarea>

          <label>Image</label>
          <input
            className="form-control mb-4"
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={beerData.imageUrl}
            onChange={handleBeerData}
          />

          <label>First Brewed</label>
          <input
            className="form-control mb-4"
            type="text"
            name="firstBrewed"
            placeholder="Date - MM/YYYY"
            value={beerData.firstBrewed}
            onChange={handleBeerData}
          />

          <label>Brewer Tips</label>
          <input
            className="form-control mb-4"
            type="text"
            name="brewersTips"
            placeholder="..."
            value={beerData.brewersTips}
            onChange={handleBeerData}
          />

          <label>Attenuation Level</label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                %
              </span>
            </div>
            <input
              className="form-control mb-4"
              type="number"
              name="attenuationLevel"
              value={beerData.attenuationLevel}
              onChange={handleBeerData}
              min={0}
              max={100}
            />
          </div>

          <label>Contributed By</label>
          <input
            className="form-control mb-4"
            type="text"
            name="contributedBy"
            placeholder="Contributed by"
            value={beerData.contributedBy}
            onChange={handleBeerData}
          />
          <button className="btn btn-primary btn-round">Add Beer</button>
        </form>
      </div>
    </>
  );
}

export default AddBeerPage;
