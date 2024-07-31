import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"


function ProjectListPages() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetchAllProjects()
    }, [])

    const fetchAllProjects = () => {
        axios
            .get(`${API_URL}/projects`)
            .then((response) => setProjects(response.data))
            .catch((error) => console.log(error))
    }

    return (
        <div className="ProjectListPage">

            {
                projects.map((project) => {
                    return (
                        <div className="ProjectCard card" key={project.id} >
                            <Link to={`/projects/${project.id}`}>
                                <h3>{project.title}</h3>
                            </Link>
                        </div>
                    )
                })
            }

        </div>

    )
}
export default ProjectListPages