import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const ProjectEditPage = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const { projectId } = useParams()

    const navigate = useNavigate()

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

    const handleProjectSubmit = e => {

        e.preventDefault()

        const requestBody = { title, description }

        axios
            .put(`${API_URL}/projects/${projectId}`, requestBody)
            .then(res => navigate(`/projects/${projectId}`))
            .catch(err => console.log(err))

    }

    return (
        <div className="EditProjectPage">

            <h3>Edit project</h3>

            <form onSubmit={handleProjectSubmit}>

                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Description:</label>
                <textarea
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button type="submit">Edit project</button>
            </form>
        </div>
    )
}

export default ProjectEditPage