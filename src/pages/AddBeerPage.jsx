import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const api_base_url = "https://ih-beers-api2.herokuapp.com/beers"


function AddBeerPage() {

  const [newBeer, setNewBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    image_url: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
  })

  const navigate = useNavigate()

  const handleForSubmit = (newBeer) => {
    newBeer.preventDefault()

    axios
      .post(`${api_base_url}/new-beer`, newBeer)
      .then(() => navigate("/beers"))
      .catch(err => console.log(err))
  }

  const handleInputChange = elm => {
    const { value, name } = elm.target
    setNewBeer({ ...newBeer, [name]: value })
  }

  // Structure and the content of the page showing the form for adding a new beer. You can leave this as it is.
  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4">
        <form onSubmit={handleForSubmit}>
          <label>Name</label>
          <input
            className="form-control mb-4"
            type="text"
            name="name"
            placeholder="Beer Name"
            value={newBeer.name}
            onChange={handleInputChange}
          />
          <label>Tagline</label>
          <input
            className="form-control mb-4"
            type="text"
            name="tagline"
            placeholder="Beer Tagline"
            value={newBeer.tagline}
            onChange={handleInputChange}
          />

          <label className="form-label">Description</label>
          <textarea
            className="form-control mb-4"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            value={newBeer.description}
            onChange={handleInputChange}
          ></textarea>

          <label>Image</label>
          <input
            className="form-control mb-4"
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={newBeer.imageUrl}
            onChange={handleInputChange}
          />

          <label>First Brewed</label>
          <input
            className="form-control mb-4"
            type="text"
            name="firstBrewed"
            placeholder="Date - MM/YYYY"
            value={newBeer.firstBrewed}
            onChange={handleInputChange}
          />

          <label>Brewer Tips</label>
          <input
            className="form-control mb-4"
            type="text"
            name="brewersTips"
            placeholder="..."
            value={newBeer.brewersTips}
            onChange={handleInputChange}
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
              value={newBeer.attenuationLevel}
              onChange={handleInputChange}
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
            value={newBeer.contributedBy}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary btn-round">Add Beer</button>
        </form>
      </div>
    </>
  )
}

export default AddBeerPage
