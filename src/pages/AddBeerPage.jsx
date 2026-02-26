import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImageUrl = (e) => setImageUrl(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      name,
      tagline,
      description,
      image_url: imageUrl,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: Number(attenuationLevel),
      contributed_by: contributedBy,
    };

    axios
      .post("https://beers-api.edu.ironhack.com/beers/new", newBeer)
      .then(() => {
        navigate("/beers");
      })
      .catch((err) => console.log(err));
  };

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
            placeholder="Beer Description"
            value={description}
            onChange={handleDescription}
          />
          <label>Image URL</label>
          <input
            className="form-control mb-4"
            type="text"
            name="image_url"
            placeholder="Beer Image URL"
            value={imageUrl}
            onChange={handleImageUrl}
          />
          <label>First Brewed</label>
          <input
            className="form-control mb-4"
            type="text"
            name="first_brewed"
            placeholder="First Brewed"
            value={firstBrewed}
            onChange={handleFirstBrewed}
          />
          <label>Brewers Tips</label>
          <input
            className="form-control mb-4"
            type="text"
            name="brewers_tips"
            placeholder="Brewers Tips"
            value={brewersTips}
            onChange={handleBrewersTips}
          />
          <label>Attenuation Level</label>
          <input
            className="form-control mb-4"
            type="number"
            name="attenuation_level"
            placeholder="Attenuation Level"
            value={attenuationLevel}
            onChange={handleAttenuationLevel}
          />
          <label>Contributed By</label>
          <input
            className="form-control mb-4"
            type="text"
            name="contributed_by"
            placeholder="Contributed By"
            value={contributedBy}
            onChange={handleContributedBy}
          />
          <button type="submit" className="btn btn-primary">
            Add Beer
          </button>
        </form>
      </div>
    </>
  );
}

export default AddBeerPage;
