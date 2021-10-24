import React, { useState } from "react";
import Card from "./UI/Card";
import classes from "./AddActivity.module.css";
import Button from "./UI/Button";

const AddActivity = (props) => {
   const [enteredType, setEnteredType] = useState("");
   const [enteredParticipant, setEnteredParticipant] = useState("");
   const [enteredPrice, setEnteredPrice] = useState("");
   const [enteredAccessibility, setEnteredAccessibility] = useState("");

   const typeChangeHandler = (event) => {
      setEnteredType(event.target.value);
   };

   const participantChangeHandler = (event) => {
      setEnteredParticipant(event.target.value);
   };

   const priceChangeHandler = (event) => {
      setEnteredPrice(event.target.value);
   };

   const accessibilityChangeHandler = (event) => {
      setEnteredAccessibility(event.target.value);
   };

   const addUserHandler = (event) => {
      // preventDefault prevents the url from printing the value from the form
      event.preventDefault();
      // if (
      //    enteredParticipants.trim().length === 0 ||
      //    enteredType.trim().length === 0
      // ) {
      //    return;
      // }
      // if (enteredParticipants.parseInt < 1) {
      //    return;
      // }
      setEnteredParticipant("");
      setEnteredType("");
      setEnteredAccessibility("");
      setEnteredPrice("");
      // instead of console.log the data from username and age input, we use props and point to a function
      // (that was defined in App.js) to add the name and age to the empty state array
      props.onAddActivity(
         enteredType,
         enteredParticipant,
         enteredPrice,
         enteredAccessibility
      );
   };

   return (
      // add class name from the adduser module called input. This classname however
      //is a prop from card and has to be added to the Card component
      <Card className={classes.input}>
         {/* {onSubmit executes a function when the form is submitted} */}
         <form onSubmit={addUserHandler}>
            {/* htmlFor and id are used for screen readers. They connect the label to the input */}
            <label htmlFor="type">Type</label>
            <input
               id="type"
               type="text"
               value={enteredType}
               onChange={typeChangeHandler}
            />
            <label htmlFor="participants">Participants</label>
            <input
               id="participant"
               type="number"
               value={enteredParticipant}
               onChange={participantChangeHandler}
            />
            <label htmlFor="a">Price</label>
            <input
               id="price"
               type="number"
               value={enteredPrice}
               onChange={priceChangeHandler}
            />
            <label htmlFor="accessibility">Accessibility</label>
            <input
               id="accessibility"
               type="number"
               value={enteredAccessibility}
               onChange={accessibilityChangeHandler}
            />
            <Button type="submit">Search Activity</Button>
         </form>
      </Card>
   );
};

export default AddActivity;
