import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

  // UseNavigate hook for navigating to another page after submitting the form
  const navigate = useNavigate();

  // Handler functions for the form inputs
  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImageUrl = (e) => setImageUrl(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  // Function to handle form submission and send data to the API
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form data to be sent in the POST request
    const newBeer = {
      name, // String
      tagline, // String
      description, // String
      image_url: imageUrl, // String
      first_brewed, // String
      brewers_tips, // String
      attenuation_level: Number(attenuationLevel), // Number (converted from input)
      contributed_by, // String
    };

    // POST request to add a new beer
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((response) => {
        // If successful, navigate to the list of all beers
        alert("Beer added successfully!");
        navigate("/beers"); // This could redirect to the beer list page
      })
      .catch((error) => {
        console.error("Error adding beer:", error);
        alert("Error adding beer, please try again.");
      });
  };

  // Form structure
  return (
    <div className="d-inline-flex flex-column w-100 p-4">
      <h2>Add a New Beer</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          className="form-control mb-4"
          type="text"
          name="name"
          placeholder="Beer Name"
          value={name}
          onChange={handleName}
          required
        />
        <label>Tagline</label>
        <input
          className="form-control mb-4"
          type="text"
          name="tagline"
          placeholder="Beer Tagline"
          value={tagline}
          onChange={handleTagline}
          required
        />
        <label className="form-label">Description</label>
        <textarea
          className="form-control mb-4"
          name="description"
          placeholder="Description"
          rows="3"
          value={description}
          onChange={handleDescription}
          required
        />
        <label>Image URL</label>
        <input
          className="form-control mb-4"
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={imageUrl}
          onChange={handleImageUrl}
          required
        />
        <label>First Brewed</label>
        <input
          className="form-control mb-4"
          type="text"
          name="firstBrewed"
          placeholder="Date - MM/YYYY"
          value={firstBrewed}
          onChange={handleFirstBrewed}
          required
        />
        <label>Brewer Tips</label>
        <input
          className="form-control mb-4"
          type="text"
          name="brewersTips"
          placeholder="Brewer Tips"
          value={brewersTips}
          onChange={handleBrewersTips}
          required
        />
        <label>Attenuation Level</label>
        <input
          className="form-control mb-4"
          type="number"
          name="attenuationLevel"
          value={attenuationLevel}
          onChange={handleAttenuationLevel}
          required
          min="0"
        />
        <label>Contributed By</label>
        <input
          className="form-control mb-4"
          type="text"
          name="contributedBy"
          placeholder="Contributed by"
          value={contributedBy}
          onChange={handleContributedBy}
          required
        />
        <button className="btn btn-primary btn-round">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
