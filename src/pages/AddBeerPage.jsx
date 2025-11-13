import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function AddBeerPage() {
  // State variables to store the values of the form inputs.
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    imageUrl: "",
    firstBrewed: "",
    brewersTips: "",
    attenuationLevel: 0,
    contributedBy: "",
  });

  const navigate = useNavigate();

  // Handler functions for the form inputs.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle the form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      name: formData.name,
      tagline: formData.tagline,
      description: formData.description,
      image_url: formData.imageUrl,
      first_brewed: formData.firstBrewed,
      brewers_tips: formData.brewersTips,
      attenuation_level: formData.attenuationLevel,
      contributed_by: formData.contributedBy,
    };

    axios
      .post(`${API_URL}/new`, newBeer)
      .then((response) => {
        console.log("response", response);
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  // Structure and content of the page showing the form for adding a new beer.
  return (
    <div className="d-inline-flex flex-column w-100 p-4">
      <form onSubmit={handleFormSubmit}>
        <label>Name</label>
        <input
          className="form-control mb-4"
          type="text"
          name="name"
          placeholder="Beer Name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <label>Tagline</label>
        <input
          className="form-control mb-4"
          type="text"
          name="tagline"
          placeholder="Beer Tagline"
          value={formData.tagline}
          onChange={handleInputChange}
        />

        <label className="form-label">Description</label>
        <textarea
          className="form-control mb-4"
          type="text"
          name="description"
          placeholder="Description"
          rows="3"
          value={formData.description}
          onChange={handleInputChange}
        ></textarea>

        <label>Image</label>
        <input
          className="form-control mb-4"
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleInputChange}
        />

        <label>First Brewed</label>
        <input
          className="form-control mb-4"
          type="text"
          name="firstBrewed"
          placeholder="Date - MM/YYYY"
          value={formData.firstBrewed}
          onChange={handleInputChange}
        />

        <label>Brewer Tips</label>
        <input
          className="form-control mb-4"
          type="text"
          name="brewersTips"
          placeholder="..."
          value={formData.brewersTips}
          onChange={handleInputChange}
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
            value={formData.attenuationLevel}
            onChange={handleInputChange}
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
          value={formData.contributedBy}
          onChange={handleInputChange}
        />

        <button className="btn btn-primary btn-round">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
