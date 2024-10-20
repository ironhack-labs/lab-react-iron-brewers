import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import axios from "axios"; // Import axios

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
  
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handler functions for the form inputs
  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImageUrl = (e) => setImageUrl(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Prepare the data to be sent
    const newBeer = {
      name,
      tagline,
      description,
      image_url: imageUrl, // Use image_url instead of imageUrl
      first_brewed: firstBrewed, // Use first_brewed instead of firstBrewed
      brewers_tips: brewersTips, // Use brewers_tips instead of brewersTips
      attenuation_level: Number(attenuationLevel), // Ensure this is a number
      contributed_by: contributedBy // Use contributed_by instead of contributedBy
    };

    try {
      // Make a POST request to the API
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer);
      
      // Navigate to the All Beers page after successful submission
      navigate("/beers");
    } catch (error) {
      console.error("Error creating new beer:", error);
      // You can also show an error message to the user here if needed
    }
  };

  // Structure and content of the page showing the form for adding a new beer
  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4">
        <form onSubmit={handleSubmit}> {/* Add onSubmit handler */}
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
            type="text"
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
              <span className="input-group-text" id="basic-addon1">
                %
              </span>
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
          <button className="btn btn-primary btn-round">Add Beer</button>
        </form>
      </div>
    </>
  );
}

export default AddBeerPage;
