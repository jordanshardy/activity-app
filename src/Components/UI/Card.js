import classes from "./Card.module.css";

const Card = (props) => {
   // const classes = "card " + props.className;
   // to output what is between the opening and closing tags on the card component (<Card/>)
   // we return props.children in a div
   // need to add two CSS clasees on the dive, one coming from the classes module, and one
   //from the props set on <Card/> in AddUser.
   return (
      // to set two classes on the div, one for the card in AddUser and one from the card div
      //below, use string interpolation.
      //classes.className is a prop from AddUser  <Card className={classes.input}>
      <div className={`${classes.card} ${props.className}`}>
         {props.children}
      </div>
   );
};

export default Card;
