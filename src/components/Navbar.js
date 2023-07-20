
import "../styles/Navbar.css"
// import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const handleNavbar = () => {
    document.getElementById('navBar').classList.toggle('navbar-open');
    document.getElementById('toggleMenu').classList.toggle('toggle-menu-clicked');
}

const toggleMenu = <FontAwesomeIcon id="toggleMenu" onClick={handleNavbar} className="toggle-menu" icon={faBars} size="2xl" />


const Navbar = () => {
    return ( 
        <nav className="navbar-container">
            <div id="navBar" className="navbar">
                <div className="navbar-options">

                    <Link to='/personal-info'>Personal Info</Link>
                    <Link to='/calorie-tracker'>Calorie Tracker</Link>
                    <Link to='/create-workouts'>Create Workouts</Link>
                    <Link to='/exercise-search'>Exercise Search</Link>

                </div>

                <span>{toggleMenu}</span>

            </div>
        </nav>
     );
}
 
export default Navbar;