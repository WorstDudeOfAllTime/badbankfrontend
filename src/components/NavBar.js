import './NavBar.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
  //Nav bar need
  // Home Page, this should be the logo which will include login/signup buttons
  // 
  return (
    <div className="navContainer flex-cent">
      <div className="logoSide">
        <h1><Link className="logo" to="/">W|B</Link></h1>
      </div>
      <div className="navSide flex-cent">
        <nav className="flex-cent">
          <ul className="flex-cent">
            <li><Link to="/accounts"><a>Accounts</a></Link></li>
            <li><Link to="/allusers"><a>All Users</a></Link></li>
            <li><Link to="/about"><a>About</a></Link></li>
            <li><Link to="/contactus"><a>Contact Us</a></Link></li>
          </ul>
        </nav>
        <Link to="/createaccount"><button>Sign Up.</button></Link>
      </div>
    </div>
  )
}

export default NavBar;