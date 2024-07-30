import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ProjectDetailsPage from "./ProjectDetailsPage"


const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const ProjectsPage = () => {

    const [projects, setProjects] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchProducts()
    }, [])


    const fetchProducts = () => {
        axios
            .get(`${API_URL}/projects`)
            .then(response => {
                setProjects(response.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="ProjectListPage">


            {loading ?
                <h1>CARGANDO...</h1>
                : projects.map(elm => {
                    console.log(elm)
                    return (
                        <Link to={`/projects/${elm.id}`} key={elm.id}>
                            <ProjectDetailsPage {...elm} />
                        </Link>

                    )
                })}


        </div>
    )
}

export default ProjectsPage