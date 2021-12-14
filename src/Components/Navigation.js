import React from "react";
import { Link } from "react-router-dom";
import { Nav, ListItem, StyledLink } from "./styles";

const Navigation = () => {
   return (
      <Nav>
         <ul>
            <ListItem>
               <StyledLink to="/about">About</StyledLink>
            </ListItem>
            <ListItem>
               <StyledLink to="/">Activity Search</StyledLink>
            </ListItem>
         </ul>
      </Nav>
   );
};

export default Navigation;
