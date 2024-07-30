import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const NewProjectForm = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate()

  const handleNewProjectSubmit = event => {
    event.preventDefault()
    const requestBody = { title, description }
    axios
      .post(`${API_URL}/projects`, requestBody)
      .then(res => navigate("/projects"))
      .catch(err => console.log(err))
  }

  return (
    <form onSubmit={handleNewProjectSubmit} className="NewProjectForm">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input id="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Create new project</button>
    </form>
  )
}

export default NewProjectForm