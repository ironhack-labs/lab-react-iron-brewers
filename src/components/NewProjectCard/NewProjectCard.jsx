import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const NewProjectCard = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    const handleProjectSumit = e => {
        e.preventDefault()

        const requestBody = { title, description }
        axios
            .post(`${API_URL}/projects`, requestBody)
            .then(res => navigate(`/projects`))
            .catch(err => console.log(err))
    }

    return (
        <div className="CreateProjectPage">
            <h1>Add New Project</h1>
            <form onSubmit={handleProjectSumit}>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button type="submit">Create New Project</button>
            </form>
        </div>
    )
}

export default NewProjectCard