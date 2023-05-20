import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-header">
    <div className="container">
      <div className="logo-heading">
        <img
          className="logo"
          alt="wave"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        />
        <h1 className="heading">Wave</h1>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="list-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="list-item">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="list-item">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
