import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import IsLoading from "../../components/IsLoading/IsLoading"
const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const ProjectDetailsPage = () => {
  const [projectDetails, setProjectDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const { project_id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    fetchProjectData()
  }, [])

  const fetchProjectData = () => {
    axios
      .get(`${API_URL}/projects/${project_id}`)
      .then(response => {
        setProjectDetails(response.data)
        setIsLoading(false)
      })
  }

  const { title, description, id } = !isLoading && projectDetails

  const handleDeleteProject = () => {
    const isConfirm = confirm("Are you sure???")
    isConfirm && axios
      .delete(`${API_URL}/projects/${project_id}`)
      .then(response => navigate('/projects'))
      .catch(err => console.log(err))
  }

  return (
    <section className="ProjectDetailsPage">
      {
        isLoading
          ?
          <IsLoading />
          :
          <div className="card">
            <div className="card-body">
              <h1>{title}</h1>
              <small>id: {id}</small>
              <p>{description}</p>

            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-between">
                <Link to={'/projects'} className="btn btn-outline-light">
                  Back to projects
                </Link>
                <Link to={`/projects/edit/${project_id}`} className="btn btn-primary">
                  Edit project
                </Link>
                <button onClick={handleDeleteProject} className="btn btn-danger">Delete project</button>
              </div>
            </div>
          </div>
      }
    </section>
  )
}
export default ProjectDetailsPage