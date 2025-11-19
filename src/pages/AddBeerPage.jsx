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
      contributed_by: contributedBy
    };

    axios.post("https://beers-api.edu.ironhack.com/beers/new", newBeer)
      .then(() => navigate("/beers"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-inline-flex flex-column w-100 p-4">
      <form onSubmit={handleSubmit}>
        {/* ... all your input fields remain the same ... */}
        <button className="btn btn-primary btn-round">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
