import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"


const NewProjectForm = () => {



    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    const { projectId } = useParams()

    useEffect(() => {
        fetchProjectData()
    }, [])

    const fetchProjectData = () => {
        axios
            .get(`${API_URL}/projects/${projectId}`)
            .then(response => {
                setTitle(response.data.title)
                setDescription(response.data.description)
            })
            .catch(err => console.log(err))
    }

    const handleTitleChange = (event) => {
        const { value } = event.target
        setTitle(value)
    }

    const handleDescriptionChange = (event) => {
        const { value } = event.target
        setDescription(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const requestBody = { title, description }

        axios
            .post(`${API_URL}/projects`, requestBody)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <div className="NewObjectForm">
            <h2>New project</h2>
            <form onSubmit={handleSubmit}>
                Título:
                <input type="text" value={title} onChange={handleTitleChange} />
                Descripción:
                <input type="text" value={description} onChange={handleDescriptionChange} />

                <button type="submit">Create new project</button>

            </form>
        </div>

    )
}

export default NewProjectForm