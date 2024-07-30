
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const NewProjectPage = () => {

    const [title, setTitel] = useState("")
    const [description, setDescription] = useState("")


    const navigate = useNavigate()

    const handleProjectSubmit = e => {

        e.preventDefault()

        const requestBody = { title, description }

        axios
            .post(`${API_URL}/projects`, requestBody)
            .then(res => {
                navigate("/projects")
            })
            .catch(err => console.log(err))

    }


    return (
        <div className="NewProjectPage">


            <h3>Add Project</h3>

            <form onSubmit={handleProjectSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitel(e.target.value)}
                />


                <label>Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button type="submit">Create a new project</button>
            </form>


        </div >
    )
}
export default NewProjectPage