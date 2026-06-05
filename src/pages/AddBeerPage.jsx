import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBeerPage() {
  // State variables to store the values of the form inputs. You can leave these as they are.

  const initialStateForm = {
    name: "",
    tagline: "",
    description: "",
    image_url: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
  }

  const [stateForm, setStateForm] = useState(initialStateForm)
  const navigate = useNavigate()

  // Handler functions for the form inputs. You can leave these as they are.

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setStateForm(prev => (
      {
        ...stateForm,
        [name]: value
      }
    ))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = stateForm
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/new`,
        body
      )
      console.log(response)
      navigate("/beers")
      // console.log(body)
    } catch (error) {
      console.log(error)
    }
  }


  // TASK:
  // 1. Create a function to handle the form submission and send the form data to the Beers API to create a new beer.
  // 2. Use axios to make a POST request to the Beers API.
  // 3. Once the beer is created, navigate the user to the page showing the list of all beers.



  // Structure and the content of the page showing the form for adding a new beer. You can leave this as it is.
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
            value={stateForm.name}
            required={true}
            onChange={handleChange}
          />
          <label>Tagline</label>
          <input
            className="form-control mb-4"
            type="text"
            name="tagline"
            placeholder="Beer Tagline"
            value={stateForm.tagline}
            required={true}
            onChange={handleChange}
          />

          <label className="form-label">Description</label>
          <textarea
            className="form-control mb-4"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            value={stateForm.description}
            required={true}
            onChange={handleChange}
          ></textarea>

          <label>Image</label>
          <input
            className="form-control mb-4"
            type="url"
            name="image_url"
            placeholder="Image URL"
            value={stateForm.image_url}
            required={true}
            onChange={handleChange}
          />

          <label>First Brewed</label>
          <input
            className="form-control mb-4"
            type="text"
            name="first_brewed"
            placeholder="Date - MM/YYYY"
            value={stateForm.first_brewed}
            required={true}
            onChange={handleChange}
          />

          <label>Brewer Tips</label>
          <input
            className="form-control mb-4"
            type="text"
            name="brewers_tips"
            placeholder="..."
            value={stateForm.brewers_tips}
            required={true}
            onChange={handleChange}
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
              name="attenuation_level"
              value={stateForm.attenuation_level}
              required={true}
              onChange={handleChange}
              min={0}
              max={100}
            />
          </div>

          <label>Contributed By</label>
          <input
            className="form-control mb-4"
            type="text"
            name="contributed_by"
            placeholder="Contributed by"
            value={stateForm.contributed_by}
            required={true}
            onChange={handleChange}
          />
          <button className="btn btn-primary btn-round">Add Beer</button>
        </form>
      </div>
    </>
  );
}

export default AddBeerPage;
