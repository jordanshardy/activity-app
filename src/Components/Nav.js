import React from "react";
import classes from "./Nav.module.css";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'
const Nav = () => {
   return (
      <nav>
         <ul className={classes.nav_links}>
            <Button variant='contained' color='primary'>
               <Link to="/about" className={classes.link}>
                  <li>About</li>
               </Link>
            </Button>
            <Button variant='contained' color='primary'>
               <Link to="/" className={classes.link}>
                  <li>Search</li>
               </Link>
            </Button>
         </ul>
      </nav>
   );
};

export default Nav;
