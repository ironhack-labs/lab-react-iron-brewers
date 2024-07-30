import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const ProjectsPage = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {  // lo usamos para  actualizar el estado del componente con los datos obtenidos
        fetchAllProjects()
    }, [])

    const fetchAllProjects = () => {
        axios
            .get(`${API_URL}/projects`)
            .then((response) => setProjects(response.data))
            .catch((error) => console.log(error))
    }



    return (
        <div className="ProjectsPage">
            {
                projects.map((project) => { // recuerda que descpués del .map, se viene key={}
                    return (

                        <div className="ProjectCard" key={project.id}>
                            <Link to={`/projects/${project.id}`} >
                                <h3>{project.title}</h3>

                            </Link>

                        </div>
                    )
                })



            }

            <h1>Prueba de que se enruta y funciona</h1>

        </div>
    )

}

export default ProjectsPage