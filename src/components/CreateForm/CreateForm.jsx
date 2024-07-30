import './CreateForm.css'
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const CreateForm = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const navigate = useNavigate()

    const handleProjectSubmit = event => {
        event.preventDefault()

        const requestBody = { title, description }

        axios
            .post(`${API_URL}/projects`, requestBody)
            .then(res => navigate(`/projects`))
            .catch(err => console.log(err))
    }

    return (
        <div className="Form">
            <h1>New Project</h1>
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
export default CreateForm