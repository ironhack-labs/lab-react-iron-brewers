import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <ul className="NavBar navbar-nav me-auto">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/new-project" className="nav-link">
          New Project
        </Link>
      </li>
    </ul>
  )
}

export default NavBar