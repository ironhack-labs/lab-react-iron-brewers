import './EditForm.css'
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const EditForm = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        fetchProjectData()
    }, [])

    const fetchProjectData = () => {
        axios
            .get(`${API_URL}/projects/${id}`)
            .then(response => {
                setTitle(response.data.title)
                setDescription(response.data.description)
            })
            .catch(err => console.log(err))
    }

    const handleProjectSubmit = event => {
        event.preventDefault()

        const requestBody = { title, description }

        axios
            .put(`${API_URL}/projects/${id}`, requestBody)
            .then(res => navigate(`/projects`))
            .catch(err => console.log(err))
    }

    return (
        <div className="Form">
            <h1>Edit that project</h1>
            <hr />
            <form onSubmit={handleProjectSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)} />


                <label>Description:</label>
                <input type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)} />

                <button type='submit'>Save</button>
            </form>
        </div>
    )


}
export default EditForm