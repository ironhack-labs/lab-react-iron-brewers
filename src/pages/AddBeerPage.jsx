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

  // ⭐ 1. Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // ⭐ 2. Build request body EXACTLY as API requires
    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      image_url: imageUrl,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: Number(attenuationLevel), // MUST be a number
      contributed_by: contributedBy,
    };

    // ⭐ 3. POST request with axios
    axios
      .post("https://beers-api.edu.ironhack.com/beers/new", newBeer)
      .then((response) => {
        console.log("Beer created:", response.data);

        // ⭐ 4. Navigate to the list of beers
        navigate("/beers");
      })
      .catch((error) => {
        console.error("Error creating beer:", error);
      });
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
            onChange={(e) => setName(e.target.value)}
          />

          <label>Tagline</label>
          <input
            className="form-control mb-4"
            type="text"
            name="tagline"
            placeholder="Beer Tagline"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />

          <label>Description</label>
          <textarea
            className="form-control mb-4"
            name="description"
            placeholder="Description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <label>Image</label>
          <input
            className="form-control mb-4"
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <label>First Brewed</label>
          <input
            className="form-control mb-4"
            type="text"
            name="firstBrewed"
            placeholder="Date - MM/YYYY"
            value={firstBrewed}
            onChange={(e) => setFirstBrewed(e.target.value)}
          />

          <label>Brewer Tips</label>
          <input
            className="form-control mb-4"
            type="text"
            name="brewersTips"
            placeholder="..."
            value={brewersTips}
            onChange={(e) => setBrewersTips(e.target.value)}
          />

          <label>Attenuation Level</label>
          <div className="input-group mb-2">
            <span className="input-group-text">%</span>
            <input
              className="form-control mb-4"
              type="number"
              name="attenuationLevel"
              value={attenuationLevel}
              onChange={(e) => setAttenuationLevel(e.target.value)}
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
            onChange={(e) => setContributedBy(e.target.value)}
          />

          <button className="btn btn-primary btn-round">Add Beer</button>
        </form>
      </div>
    </>
  );
}

export default AddBeerPage;
