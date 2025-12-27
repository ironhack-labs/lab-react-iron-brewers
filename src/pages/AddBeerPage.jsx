import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const http = axios.create({
  baseURL: "https://beers-api.edu.ironhack.com/beers",
  timeout: 1000
})

const initialState = {
    "_id": "",
    "name": "",
    "tagline": "",
    "description": "",
    "image_url": "",
    "first_brewed": "",
    "brewers_tips": "",
    "attenuation_level": 0,
    "contributed_by": ""
}

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
  const [state, setState] = useState(initialState);

  // Handler functions for the form inputs. You can leave these as they are.
  // const handleName = (e) => setName(e.target.value);
  // const handleTagline = (e) => setTagline(e.target.value);
  // const handleDescription = (e) => setDescription(e.target.value);
  // const handleImageUrl = (e) => setImageUrl(e.target.value);
  // const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  // const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  // const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  // const handleContributedBy = (e) => setContributedBy(e.target.value);
  const handleState = (event) => {
    const newBeer = {
      ...state,
      [event.target.name]: event.target.value
    };
    setState(newBeer);
  }
  const navigate = useNavigate();

  const handleSubmission = (event) => {
    event.preventDefault();
    const submission = http.post("/new", state)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
    navigate("/");
  }


  // TASK:
  // 1. Create a function to handle the form submission and send the form data to the Beers API to create a new beer.
  // 2. Use axios to make a POST request to the Beers API.
  // 3. Once the beer is created, navigate the user to the page showing the list of all beers.



  // Structure and the content of the page showing the form for adding a new beer. You can leave this as it is.
  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4">
        <form onSubmit={handleSubmission}>
          <label>Name</label>
          <input
            className="form-control mb-4"
            type="text"
            name="name"
            placeholder="Beer Name"
            value={state.name}
            onChange={handleState}
          />
          <label>Tagline</label>
          <input
            className="form-control mb-4"
            type="text"
            name="tagline"
            placeholder="Beer Tagline"
            value={state.tagline}
            onChange={handleState}
          />

          <label className="form-label">Description</label>
          <textarea
            className="form-control mb-4"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            value={state.description}
            onChange={handleState}
          ></textarea>

          <label>Image</label>
          <input
            className="form-control mb-4"
            type="text"
            name="image_url"
            placeholder="Image URL"
            value={state.image_url}
            onChange={handleState}
          />

          <label>First Brewed</label>
          <input
            className="form-control mb-4"
            type="text"
            name="first_brewed"
            placeholder="Date - MM/YYYY"
            value={state.first_brewed}
            onChange={handleState}
          />

          <label>Brewer Tips</label>
          <input
            className="form-control mb-4"
            type="text"
            name="brewers_tips"
            placeholder="..."
            value={state.brewers_tips}
            onChange={handleState}
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
              name="attenuation_level"
              value={state.attenuation_level}
              onChange={handleState}
              min={0}
              max={100}
            />
          </div>

          <label>Contributed By</label>
          <input
            className="form-control mb-4"
            type="text"
            name="contributed_by"
            placeholder="Contributed by"
            value={state.contributed_by}
            onChange={handleState}
          />
          <button className="btn btn-primary btn-round">Add Beer</button>
        </form>
      </div>
    </>
  );
}

export default AddBeerPage;
