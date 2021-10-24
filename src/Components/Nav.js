import React from "react";
import classes from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
   return (
      <nav>
         <ul className={classes.nav_links}>
            <Link to="/about" className={classes.link}>
               <li>About</li>
            </Link>
            <Link to="/" className={classes.link}>
               <li>Search</li>
            </Link>
         </ul>
      </nav>
   );
};

export default Nav;
