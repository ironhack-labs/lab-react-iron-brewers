import axios from "axios"
import { useEffect, useState } from "react"

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"


const EditProjectCard = ({ projectsId }) => {


    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        fetchProject()
    }, [])

    const fetchProject = () => {
        axios
            .get(`${API_URL}/projects/${projectsId}`)
            .then(res => {
                setTitle(res.data.title)
                setDescription(res.data.description)
            })
            .catch(error => console.log(error))
    }

    const handleProjectSumit = e => {

        e.preventDefault()

        const requestBody = { title, description }

        axios
            .put(`${API_URL}/projects/${projectsId}`, requestBody)
            .then(res => navigate(`/projects/${projectId}`))
            .catch(error => console.log(error))
    }

    return (
        <div className="EditProjectPage">

            <>
                <h3>Edit Project</h3>
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

                    <button type="submit">Edit project</button>
                </form>
            </>

        </div>
    )
}

export default EditProjectCard