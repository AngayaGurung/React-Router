import { NavLink } from "react-router-dom";
import Home from "../Home/Home";

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
