import { Link } from "react-router-dom"
import { TropicalStorm } from "react-bootstrap-icons"

const ProjectCard = ({ id, title }) => {
  return (
    <Link to={`/projects/${id}`} className="ProjectCard list-group-item list-group-item-action py-3 ">
      {title}
    </Link>
  )
}

export default ProjectCard