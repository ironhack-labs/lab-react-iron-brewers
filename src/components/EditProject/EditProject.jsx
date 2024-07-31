import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const EditProject = () => {

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
            .then((res) => {
                setTitle(res.data.title)
                setDescription(res.data.description)
            })
            .catch((err) => console.log(err))
    }


    const handleTitleChange = event => {
        const { value } = event.target
        setTitle(value)
    }

    const handleDescriptionChange = event => {
        const { value } = event.target
        setDescription(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const requestBody = { title, description }

        axios
            .put(`${API_URL}/projects/${projectId}`, requestBody)
            .then(res => navigate(`/projects/${projectId}`))
            .catch(err => console.log(err))

    }


    return (
        <div className="EditProject">
            <h2>Edit project</h2>
            <form onSubmit={handleSubmit}>
                Título:
                <input type="text" value={title} onChange={handleTitleChange} />
                Descripción:
                <input type="text" value={description} onChange={handleDescriptionChange} />

                <button type="submit">Edit project</button>
            </form>
        </div>
    )
}

export default EditProject