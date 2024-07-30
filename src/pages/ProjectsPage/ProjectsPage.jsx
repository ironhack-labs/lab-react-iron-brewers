import { useEffect, useState } from "react"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import axios from "axios"
import { Link } from "react-router-dom"

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const ProjectsPage = () => {

    const [projects, setProjects] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchAllProjects()
    }, [])

    const fetchAllProjects = () => {
        axios
            .get(`${API_URL}/projects`)
            .then((response) => {
                setProjects(response.data)
                setIsLoading(false)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="ProjectsPage">
            {
                !isLoading &&
                projects.map((projects) => {
                    return (
                        <Link key={projects.id}>
                            <ProjectCard {...projects} />
                        </Link>
                    )

                })
            }
        </div>
    )
}

export default ProjectsPage