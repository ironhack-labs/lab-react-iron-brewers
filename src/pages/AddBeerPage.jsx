import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  // State variables to store the values of the form inputs. You can leave these as they are.
  const navigate = useNavigate();
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    description: "",
    imageUrl: "",
    firstBrewed: "",
    brewersTips: "",
    attenuationLevel: 0,
    contributedBy: "",
  });
  {
    /**/
  }
  // Handler functions for the form inputs. You can leave these as they are.
  const handleEvent = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // 1. Create a function to handle the form submission and send the form data to the Beers API to create a new beer.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("...enviando al servidor");
    setShouldSubmit(true);
  };
  useEffect(() => {
    if (shouldSubmit) {
      const transformedForm = {
        name: form.name,
        tagline: form.tagline,
        description: form.description,
        image_url: form.imageUrl, 
        first_brewed: form.firstBrewed, 
        brewers_tips: form.brewersTips, 
        attenuation_level: form.attenuationLevel,
        contributed_by: form.contributedBy
      }
      // 2. Use axios to make a POST request to the Beers API.
      axios
        .post("https://ih-beers-api2.herokuapp.com/beers/new", transformedForm)
        .then((response) => {
          console.log(response.data);
          // 3. Once the beer is created, navigate the user to the page showing the list of all beers.
          navigate("/beers");
        })
        .catch((error) => {
          console.error("Error al añadir la cerveza:", error);
          alert("Hubo un problema al añadir la cerveza.");
        })
        .finally(() => {
          setShouldSubmit(false); // Reiniciar el estado de envío.
        });
    }
  }, [shouldSubmit, form, navigate]);

  // TASK:

  console.log(form);
  // Structure and the content of the page showing the form for adding a new beer. You can leave this as it is.
  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4">
        <form>
          <label>Name</label>
          <input
            className="form-control mb-4"
            type="text"
            name="name"
            placeholder="Beer Name"
            onChange={handleEvent}
          />
          <label>Tagline</label>
          <input
            className="form-control mb-4"
            type="text"
            name="tagline"
            placeholder="Beer Tagline"
            onChange={handleEvent}
          />

          <label className="form-label">Description</label>
          <textarea
            className="form-control mb-4"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            onChange={handleEvent}
          ></textarea>

          <label>Image</label>
          <input
            className="form-control mb-4"
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            onChange={handleEvent}
          />

          <label>First Brewed</label>
          <input
            className="form-control mb-4"
            type="text"
            name="firstBrewed"
            placeholder="Date - MM/YYYY"
            onChange={handleEvent}
          />

          <label>Brewer Tips</label>
          <input
            className="form-control mb-4"
            type="text"
            name="brewersTips"
            placeholder="..."
            onChange={handleEvent}
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
              onChange={handleEvent}
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
            onChange={handleEvent}
          />
          <button className="btn btn-primary btn-round" onClick={handleSubmit}>
            Add Beer
          </button>
        </form>
      </div>
    </>
  );
}

export default AddBeerPage;
