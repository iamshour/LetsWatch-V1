import { FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to='/' className="logo">
                <FaYoutube className='logo-icon' />
                <h3>LetsWatch</h3>
            </Link>
            <ul className='links'>
                <li className='link-item'>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li className='link-item'>
                    <Link to='/about'>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
