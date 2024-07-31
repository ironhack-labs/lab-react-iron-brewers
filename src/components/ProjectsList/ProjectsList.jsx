import { useEffect, useState } from 'react'
import './ProjectsList.css'

import axios from 'axios'
import { Link } from 'react-router-dom'

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const ProjectsList = () => {

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
            .catch((err) => console.log(error))
    }

    return (
        <div className="ProjectsList">
            {isLoading ?
                <h1>Cargando...</h1>
                : projects.map(elm => {
                    return (
                        <Link to={`/projects/${elm.id}`} key={elm.id}>
                            <article className='EachProject'>
                                <h1>
                                    {elm.title}
                                </h1>
                                <p>{elm.description}</p>
                            </article>
                        </Link>
                    )
                })
            }

        </div>
    )
}

export default ProjectsList