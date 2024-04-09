import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"; // Import useHistory

function AddBeerPage() {
  // State variables to store the values of the form inputs
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handler functions for the form inputs
  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImageUrl = (e) => setImageUrl(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  // useHistory hook to redirect after successful form submission
  const history = useHistory();

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        {
          name,
          tagline,
          description,
          image_url: imageUrl,
          first_brewed: firstBrewed,
          brewers_tips: brewersTips,
          attenuation_level: parseInt(attenuationLevel), // Ensure it's a number
          contributed_by: contributedBy,
        }
      );
      setSuccessMessage(response.data.message);

      // Redirect to the list of all beers after successful submission
      history.push("/beers");
    } catch (error) {
      console.error("Error creating beer:", error);
    }
  };

  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4">
        <form onSubmit={handleSubmit}>
          {" "}
          {/* Add onSubmit */}
          {/* Form inputs */}
          <label>Name</label>
          <input
            className="form-control mb-4"
            type="text"
            name="name"
            placeholder="Beer Name"
            value={name}
            onChange={handleName}
          />
          {/* Rest of the inputs */}
          <button type="submit" className="btn btn-primary btn-round">
            Add Beer
          </button>{" "}
          {/* Add type and className */}
        </form>
        {successMessage && <p>{successMessage}</p>}
      </div>
    </>
  );
}

export default AddBeerPage;
