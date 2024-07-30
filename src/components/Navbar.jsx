import { Link } from "react-router-dom"


const Navbar = () => {

    return (
        <nav>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/projects">
                <button>Projects</button>
            </Link>

            <Link to="/projects/meloinvento/">
                <button>New Projects</button>
            </Link>

        </nav>
    )
}

export default Navbar