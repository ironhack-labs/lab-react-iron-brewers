import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate(); // para redireccionar tras crear

  // Handler functions for the form inputs
  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImageUrl = (e) => setImageUrl(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  // 💥 Envío del formulario
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
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((response) => {
        console.log("🍺 ¡Cerveza creada exitosamente!", response.data);

        // Limpiar formulario
        setName("");
        setTagline("");
        setDescription("");
        setImageUrl("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel(0);
        setContributedBy("");

        // Redirigir al listado de cervezas
        navigate("/beers");
      })
      .catch((error) => {
        console.error("❌ Error al añadir la cerveza:", error);
        alert("Error al añadir la cerveza.");
      });
  };

  return (
    <div className="d-inline-flex flex-column w-100 p-4">
      <h2 className="mb-4">Añadir nueva cerveza</h2>
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
        <div className="input-group mb-4">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              %
            </span>
          </div>
          <input
            className="form-control"
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

        <button type="submit" className="btn btn-primary btn-round">
          Add Beer
        </button>
      </form>
    </div>
  );
}

export default AddBeerPage;
