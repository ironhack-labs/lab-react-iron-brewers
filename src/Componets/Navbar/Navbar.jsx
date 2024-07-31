import { Link } from "react-router-dom"

function Navbar() {

    return (
        <nav>
            <Link to="/">
                <button>Home</button>
            </Link>

            <Link to="/projects">
                <button>Projects</button>
            </Link>

            <Link to="/create">
                <button>New project</button>
            </Link>
        </nav>
    )

}
export default Navbar