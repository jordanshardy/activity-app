import styled from "styled-components";
import { Link } from "react-router-dom";

export const Body = styled.body`
   font-family: "Poppins", sans-serif;
   margin: 0 auto;
   text-align: center;
`;

export const Button = styled.button`
   border: 1px solid grey;
   border-radius: 20px;
   padding: 10px;
   font-family: "Poppins", sans-serif;
   background-color: lightgrey;
`;
export const Header = styled.h1`
   font-size: 40px;
   font-family: "Reem Kufi", sans-serif;
   margin: 0;
`;

export const Paragraph = styled.p`
   font-family: "Poppins", sans-serif;
`;

export const Nav = styled.nav`
   background-color: #b4d8de;
   font-family: "Reem Kufi", sans-serif;
   font-size: 20px;
   margin: 0;
`;

export const ListItem = styled.li`
   list-style-type: none;
   display: inline-block;
   padding: 15px;
   text-decoration: none;
`;

export const StyledLink = styled(Link)`
   text-decoration: none;
   color: white;
   &:link,
   &:hover,
   &:visited,
   &:active {
      text-decoration: none;
   }
   &:focus {
      text-decoration: underline;
   }
`;

export const DropdownForm = styled("dropdown-form")`
   font-family: "Reem Jufi", sans-serif;
`;

export const RadioForm = styled("RadioForm")`
   display: block;
   margin: 15px;
`;

export const StyledResults = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #b4d8de;
   max-width: 400px;
   padding: 20px;
   box-shadow: 2px 2px 2px grey;
   border-radius: 20px;
   margin: 20px;
`;

export const StyledForm = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

export const StyledSelect = styled.select`
   width: 200px;
   font-family: "Reem Jufi", sans-serif;
   margin: 20px;
`;

export const StyledOption = styled.option`
   color: red;
`;

export const Container = styled.div`
   max-width: 800px;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   // background-color: #ededed;
`;
