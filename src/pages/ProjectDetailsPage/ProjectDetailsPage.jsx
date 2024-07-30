import './ProjectDetailsPage.css'
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const ProjectDetailsPage = () => {

    const { id } = useParams()

    const [project, setProject] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        fetchProject()
    }, [])

    const fetchProject = () => {
        axios
            .get(`${API_URL}/projects/${id}`)
            .then((response) => {
                setProject(response.data)
                setIsLoading(false)
            })
            .catch((err) => console.log(err))
    }
    const deleteProject = () => {
        axios
            .delete(`${API_URL}/projects/${id}`)
            .then(res => navigate('/projects'))
            .catch(err => console.log(err))
    }

    return (

        <div className="ProjectDetailsPage">
            {
                isLoading
                    ? <h1>cargando</h1>
                    : <div>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                    </div>
            }

            <div className='buttons'>
                <Link to={'/projects'}>  <button>Back to Projects</button></Link>
                <Link to={`/projects/edit/${id}`}> <button>Edit Project</button> </Link>
                <button onClick={deleteProject} > Delete project</button>
            </div>
        </div>
    )
}
export default ProjectDetailsPage 