import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (

        <nav className="Navbar">
            <Link to={'/'} >home page</Link>
            <Link to={'/projects'}> projects </Link>
            <Link to={'/create'} > add new projects</Link>
        </nav>

    )
}
export default Navbar