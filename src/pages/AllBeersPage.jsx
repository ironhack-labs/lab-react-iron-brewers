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
        <FormInput
          label="Name"
          type="text"
          name="name"
          placeholder="Beer Name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <FormInput
          label="Tagline"
          type="text"
          name="tagline"
          placeholder="Beer Tagline"
          value={formData.tagline}
          onChange={handleInputChange}
        />

        <FormTextArea
          label="Description"
          name="description"
          placeholder="Description"
          rows="3"
          value={formData.description}
          onChange={handleInputChange}
        />

        <FormInput
          label="Image"
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleInputChange}
        />

        <FormInput
          label="First Brewed"
          type="text"
          name="firstBrewed"
          placeholder="Date - MM/YYYY"
          value={formData.firstBrewed}
          onChange={handleInputChange}
        />

        <FormInput
          label="Brewer Tips"
          type="text"
          name="brewersTips"
          placeholder="..."
          value={formData.brewersTips}
          onChange={handleInputChange}
        />

        <FormInput
          label="Attenuation Level"
          type="number"
          name="attenuationLevel"
          placeholder="%"
          value={formData.attenuationLevel}
          onChange={handleInputChange}
          min={0}
          max={100}
          inputGroupText="%"
        />

        <FormInput
          label="Contributed By"
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

function FormInput({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  min,
  max,
  inputGroupText,
}) {
  return (
    <div className="mb-4">
      <label>{label}</label>
      {inputGroupText ? (
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              {inputGroupText}
            </span>
          </div>
          <input
            className="form-control"
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            min={min}
            max={max}
          />
        </div>
      ) : (
        <input
          className="form-control"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
        />
      )}
    </div>
  );
}

function FormTextArea({ label, name, placeholder, rows, value, onChange }) {
  return (
    <div className="mb-4">
      <label>{label}</label>
      <textarea
        className="form-control"
        name={name}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default AddBeerPage;
