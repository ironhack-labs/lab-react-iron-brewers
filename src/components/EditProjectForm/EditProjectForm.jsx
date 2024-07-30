import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import IsLoading from "../IsLoading/IsLoading"
const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const EditProjectForm = ({ projectId }) => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetchProductData()
  }, [])

  const fetchProductData = () => {
    axios
      .get(`${API_URL}/projects/${projectId}`)
      .then(response => {
        setTitle(response.data.title)
        setDescription(response.data.description)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }

  const handleNewProjectSubmit = event => {
    event.preventDefault()
    const requestBody = { title, description }
    axios
      .put(`${API_URL}/projects/${projectId}`, requestBody)
      .then(res => navigate(`/projects/${projectId}`))
      .catch(err => console.log(err))
  }

  return (
    isLoading
      ?
      <IsLoading />
      :
      <form className="EditProjectForm" onSubmit={handleNewProjectSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input id="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Save project</button>
      </form>

  )
}

export default EditProjectForm