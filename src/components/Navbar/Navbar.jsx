import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    return (
        <div className="Navbar">
            <Link to={'/'} className='Link'>
                <p>All projects</p>
            </Link>
            <Link to={'/create'} className='Link'>
                <p>New project</p>
            </Link>
        </div>
    )
}

export default Navbar