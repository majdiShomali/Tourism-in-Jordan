import { Outlet, Link } from "react-router-dom";
import "./header.css"
const Header = () => {
  return (
    <>
      <nav>
        <h1>tourism in Jordan</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="Extra">details</Link>
          </li>
     
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Header;