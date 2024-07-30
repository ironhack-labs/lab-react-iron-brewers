import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"


const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const ProjectDetails = () => {

    const { projectId } = useParams() // Para acceso y renderización de contenido dinámico.

    const [project, setProject] = useState() //Para almacenar en el estado
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate() // para navegar en react

    useEffect(() => {
        fetchProject() // después debemos definir fetch y lo haremos con axios.
    }, [])

    const fetchProject = () => {
        axios
            .get(`${API_URL}/projects/${projectId}`)
            .then((responde) => {
                setProject(reponse.data)
                setIsLoading(false)

            })
            .catch((error) => console.log(error))
    }

    const deleteProject = () => {
        axios
            .delete(`${API_URL}/projects/${projectId}`)
            .then(res => navigate('projects'))
            .catch((error) => console.log(SyntaxError))
    }

    return (
        <div className="ProjectDetails">
            {
                isLoading ?
                    <h1>Cargando</h1> :
                    <>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                    </>
            }

            <Link>
                <button>Back to projects colega</button>
            </Link>
            <Link>
                <button>Edit Project tio</button>
            </Link>

            <button onClick={deleteProject}>Delete Project</button>

        </div>
    )
}

export default ProjectDetails