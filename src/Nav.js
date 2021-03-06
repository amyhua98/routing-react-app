import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }

  return (
    <nav>
      <Link style={navStyle}  to="/">
      <h3>Near Earth</h3>
      </Link>
        <ul className = "nav-link">
            <Link style={navStyle} to="/about">
              <li>About</li>
            </Link>
            <Link style={navStyle} to="/space">
            <li>Space</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;