import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <Link to={"/"}>
                <button>Inicio</button>
            </Link>
            <Link to={"/projects"}>
                <button>Projects</button>
            </Link>
            <Link to={"/create"}>
                <button>Create New Entry</button>
            </Link>
        </nav>
    )
}

export default Navbar