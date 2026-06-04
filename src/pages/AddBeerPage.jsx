import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  // State variables to store the values of the form inputs. You can leave these as they are.
  // const [name, setName] = useState("")
  // const [tagline, setTagline] = useState("")
  // const [description, setDescription] = useState("")
  // const [imageUrl, setImageUrl] = useState("")
  // const [firstBrewed, setFirstBrewed] = useState("")
  // const [brewersTips, setBrewersTips] = useState("")
  // const [attenuationLevel, setAttenuationLevel] = useState(0)
  // const [contributedBy, setContributedBy] = useState("")
  const navigate = useNavigate();
  const [newBeer, setNewBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    imageUrl: "",
    firstBrewed: "",
    brewersTips: "",
    attenuationLevel: 0,
    contributedBy: "",
  });

  // Handler functions for the form inputs. You can leave these as they are.
  // const handleName = (e) => setName(e.target.value)
  // const handleTagline = (e) => setTagline(e.target.value)
  // const handleDescription = (e) => setDescription(e.target.value)
  // const handleImageUrl = (e) => setImageUrl(e.target.value)
  // const handleFirstBrewed = (e) => setFirstBrewed(e.target.value)
  // const handleBrewersTips = (e) => setBrewersTips(e.target.value)
  // const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value)
  // const handleContributedBy = (e) => setContributedBy(e.target.value)

  const handleChange = (e) => {
    setNewBeer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // TASK:
  // 1. Create a function to handle the form submission and send the form data to the Beers API to create a new beer.
  // 2. Use axios to make a POST request to the Beers API.
  // 3. Once the beer is created, navigate the user to the page showing the list of all beers.

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        ...newBeer,
        image_url: newBeer.imageUrl,
        first_brewed: newBeer.firstBrewed,
        brewer_tips: newBeer.brewersTips,
        attenuation_level: newBeer.attenuationLevel,
        contributed_by: newBeer.contributedBy,
      };

      const response = await axios.post(
        "https://beers-api.edu.ironhack.com/beers/new",
        body,
      );

      navigate("/beers");
    } catch (error) {
      console.log(error);
    }
  };
  // Structure and the content of the page showing the form for adding a new beer. You can leave this as it is.
  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            className="form-control mb-4"
            type="text"
            name="name"
            placeholder="Beer Name"
            value={newBeer.name}
            onChange={handleChange}
          />
          <label>Tagline</label>
          <input
            className="form-control mb-4"
            type="text"
            name="tagline"
            placeholder="Beer Tagline"
            value={newBeer.tagline}
            onChange={handleChange}
          />

          <label className="form-label">Description</label>
          <textarea
            className="form-control mb-4"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            value={newBeer.description}
            onChange={handleChange}
          ></textarea>

          <label>Image</label>
          <input
            className="form-control mb-4"
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={newBeer.imageUrl}
            onChange={handleChange}
          />

          <label>First Brewed</label>
          <input
            className="form-control mb-4"
            type="text"
            name="firstBrewed"
            placeholder="Date - MM/YYYY"
            value={newBeer.firstBrewed}
            onChange={handleChange}
          />

          <label>Brewer Tips</label>
          <input
            className="form-control mb-4"
            type="text"
            name="brewersTips"
            placeholder="..."
            value={newBeer.brewersTips}
            onChange={handleChange}
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
              value={newBeer.attenuationLevel}
              onChange={handleChange}
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
            value={newBeer.contributedBy}
            onChange={handleChange}
          />
          <button className="btn btn-primary btn-round">Add Beer</button>
        </form>
      </div>
    </>
  );
}

export default AddBeerPage;
