import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


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

                    return (
                        <Link key={projects.id} to={`/projects/${projects.id}`}  >
                            <h3>{projects.title}</h3>
                        </Link>

                    )
                })}


        </div>
    )
}

export default ProjectsPage