import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImageUrl = (e) => setImageUrl(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(Number(e.target.value));
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  const API_URL = "https://ih-beers-api2.herokuapp.com/beers";
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      name: name || "Test Beer",
      tagline: tagline || "Test Tagline",
      description: description || "Test Description",
      image_url: imageUrl || "https://via.placeholder.com/150",
      first_brewed: firstBrewed || "01/2024",
      brewers_tips: brewersTips || "Test Tips",
      attenuation_level: attenuationLevel || 75,
      contributed_by: contributedBy || "Test Contributor",
    };

    console.log("Request Body:", requestBody); // Debugging: Print request body to console

    axios
      .post(`${API_URL}/new`, requestBody)
      .then((response) => {
        console.log("Response:", response.data);
        navigate("/beers");
      })
      .catch((error) => {
        if (error.response) {
          console.error('Error response:', error.response.data);
        } else if (error.request) {
          console.error('Error request:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
      });
  };

  return (
    <div className="d-inline-flex flex-column w-100 p-4">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          className="form-control mb-4"
          type="text"
          name="name"
          placeholder="Beer Name"
          value={name}
          onChange={handleName}
        />
        <label>Tagline</label>
        <input
          className="form-control mb-4"
          type="text"
          name="tagline"
          placeholder="Beer Tagline"
          value={tagline}
          onChange={handleTagline}
        />
        <label className="form-label">Description</label>
        <textarea
          className="form-control mb-4"
          name="description"
          placeholder="Description"
          rows="3"
          value={description}
          onChange={handleDescription}
        ></textarea>
        <label>Image</label>
        <input
          className="form-control mb-4"
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={imageUrl}
          onChange={handleImageUrl}
        />
        <label>First Brewed</label>
        <input
          className="form-control mb-4"
          type="text"
          name="firstBrewed"
          placeholder="Date - MM/YYYY"
          value={firstBrewed}
          onChange={handleFirstBrewed}
        />
        <label>Brewer Tips</label>
        <input
          className="form-control mb-4"
          type="text"
          name="brewersTips"
          placeholder="..."
          value={brewersTips}
          onChange={handleBrewersTips}
        />
        <label>Attenuation Level</label>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">%</span>
          </div>
          <input
            className="form-control mb-4"
            type="number"
            name="attenuationLevel"
            value={attenuationLevel}
            onChange={handleAttenuationLevel}
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
          value={contributedBy}
          onChange={handleContributedBy}
        />
        <button className="btn btn-primary btn-round" type="submit">
          Add Beer
        </button>
      </form>
    </div>
  );
}

export default AddBeerPage;
