import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const ProjectDetails = () => {

    const { projectId } = useParams()

    const [project, setProject] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        fetchProject()
    }, [])

    const fetchProject = () => {
        axios
            .get(`${API_URL}/projects/${projectId}`)
            .then((res) => {
                setProject(res.data)
                setIsLoading(false)
            })
            .catch((error) => console.log(error))
    }

    const deleteProject = () => {
        axios
            .delete(`${API_URL}/projects/${projectId}`)
            .then(() => navigate('/projects'))
            .catch((error) => console.log(error))
    }

    return (
        <div className="ProjectDetailsPage">
            {
                isLoading ?
                    <h1>Loading!</h1>
                    :
                    <>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        <Link to="/projects">
                            <button>Back to projects</button>
                        </Link>
                        <Link to={`/projects/edit/${projectId}`}>
                            <button>Edit</button>
                        </Link>
                        <button onClick={deleteProject}>Delete Project</button>
                    </>
            }
        </div>
    )
}

export default ProjectDetails