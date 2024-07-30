import ProjectCard from "../../components/ProjectCard/ProjectCard"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"
import "./../../components/ProjectCard/ProjectCard.css"


const ProjectsPage = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetchAllProjects()
    }, [])

    const fetchAllProjects = () => {
        axios
            .get(`${API_URL}/projects`)
            .then((res) => setProjects(res.data))
            .catch((err) => console.log(err))
    }

    return (
        <div className="ProjectsPage">

            {projects.map((project) => {
                return (
                    <div className="ProjectCard" key={project.id}>
                        <Link to={`/projects/${project.id}`}>
                            <ProjectCard {...project} />
                        </Link>
                    </div>
                )

            })}

        </div>
    )
}

export default ProjectsPage