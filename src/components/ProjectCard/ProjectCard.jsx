import { Link } from 'react-router-dom'
import './ProjectCard.css'

const ProjectCard = ({ title, description, id }) => {
    return (
        <Link to={`/projects/${id}`}>
            <div className="ProjectCard">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </Link>
    )
}
export default ProjectCard