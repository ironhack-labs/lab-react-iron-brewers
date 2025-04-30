import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
    image_url: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "attenuation_level" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", formData)
      .then(() => {
        navigate("/beers");
      })
      .catch((error) => {
        console.error("Error creating beer:", error);
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
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Tagline</label>
        <input
          className="form-control mb-4"
          type="text"
          name="tagline"
          placeholder="Beer Tagline"
          value={formData.tagline}
          onChange={handleChange}
          required
        />
        <label>Description</label>
        <textarea
          className="form-control mb-4"
          name="description"
          placeholder="Description"
          rows="3"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <label>Image URL</label>
        <input
          className="form-control mb-4"
          type="text"
          name="image_url"
          placeholder="Image URL"
          value={formData.image_url}
          onChange={handleChange}
          required
        />
        <label>First Brewed</label>
        <input
          className="form-control mb-4"
          type="text"
          name="first_brewed"
          placeholder="Date - MM/YYYY"
          value={formData.first_brewed}
          onChange={handleChange}
          required
        />
        <label>Brewer Tips</label>
        <input
          className="form-control mb-4"
          type="text"
          name="brewers_tips"
          placeholder="..."
          value={formData.brewers_tips}
          onChange={handleChange}
          required
        />
        <label>Attenuation Level</label>
        <div className="input-group mb-4">
          <span className="input-group-text">%</span>
          <input
            className="form-control"
            type="number"
            name="attenuation_level"
            value={formData.attenuation_level}
            onChange={handleChange}
            min="0"
            max="100"
            required
          />
        </div>
        <label>Contributed By</label>
        <input
          className="form-control mb-4"
          type="text"
          name="contributed_by"
          placeholder="Contributed by"
          value={formData.contributed_by}
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary btn-round" type="submit">
          Add Beer
        </button>
      </form>
    </div>
  );
}

export default AddBeerPage;
