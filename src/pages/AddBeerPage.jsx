import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    firstBrewed: "",
    brewersTips: "",
    attenuationLevel: 0,
    contributedBy: "",
    imageUrl: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "attenuationLevel" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      name: formData.name,
      tagline: formData.tagline,
      description: formData.description,
      first_brewed: formData.firstBrewed,
      brewers_tips: formData.brewersTips,
      attenuation_level: formData.attenuationLevel,
      contributed_by: formData.contributedBy,
    };

    if (formData.imageUrl) {
      requestBody.image_url = formData.imageUrl;
    }

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", requestBody)
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
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
        />

        <label>First Brewed</label>
        <input
          className="form-control mb-4"
          type="text"
          name="firstBrewed"
          placeholder="Date - MM/YYYY"
          value={formData.firstBrewed}
          onChange={handleChange}
          required
        />

        <label>Brewer Tips</label>
        <input
          className="form-control mb-4"
          type="text"
          name="brewersTips"
          placeholder="..."
          value={formData.brewersTips}
          onChange={handleChange}
          required
        />

        <label>Attenuation Level</label>
        <div className="input-group mb-4">
          <span className="input-group-text">%</span>
          <input
            className="form-control"
            type="number"
            name="attenuationLevel"
            value={formData.attenuationLevel}
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
          name="contributedBy"
          placeholder="Contributed by"
          value={formData.contributedBy}
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
