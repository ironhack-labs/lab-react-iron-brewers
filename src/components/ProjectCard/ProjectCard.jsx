import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import './ProjectCard.css'

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const ProjectCard = () => {

    const { projectId } = useParams()

    const navigate = useNavigate()

    const [projectCard, setProjectCard] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchProjectCard()
    }, [])

    const fetchProjectCard = () => {
        axios
            .get(`${API_URL}/projects/${projectId}`)
            .then((res) => {
                setProjectCard(res.data)
                setIsLoading(false)
            })
            .catch((error) => console.log(error))
    }



    const deleteProjectCard = () => {
        axios
            .delete(`${API_URL}/projects/${projectId}`)
            .then(res => navigate('/'))
    }



    return (
        <article className="ProjectCard">
            {isLoading
                ? <h1>Cargando...</h1>
                : <>
                    <h1>{projectCard.title}</h1>
                    <p>{projectCard.description}</p>
                </>}
            <div className="buttons">
                <Link to={'/'} ><p className="changeProjectBtn">Back to projects</p></Link>
                <Link to={`/projects/edit/${projectId}`}  ><p className="changeProjectBtn">Edit project</p></Link>
            </div>
            <button onClick={deleteProjectCard} >Delete this project</button>
        </article>
    )
}

export default ProjectCard