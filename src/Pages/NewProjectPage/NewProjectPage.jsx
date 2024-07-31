import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

function NewProjectPage() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    const handleProjectSubmit = e => {
        e.preventDefault()

        const requestBody = { title, description }

        axios
            .post(`${API_URL}/project`, requestBody)
            .then(res => navigate('/project'))
            .catch(err => console.log(err))

    }

    return (
        <div className="CreateProjectPage">
            <h3>Add Project</h3>

            <form onSubmit={handleProjectSubmit}>

                <label>Titel:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Description</label>
                <textarea
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button type="submit">Create new project</button>
            </form>

        </div>
    )

}
export default NewProjectPage