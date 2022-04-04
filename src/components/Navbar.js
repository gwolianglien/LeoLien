import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to='/leolien' href="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/leolien/projects' href="#">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/leolien/contact' href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;