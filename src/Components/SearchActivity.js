import React, { useState } from "react";
import Card from "./UI/Card";
import classes from "./SearchActivity.module.css";
import Button from "./UI/Button";

const SearchActivity = (props) => {
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

   const handleCheckboxtype = (event) => {
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
      props.onSearchActivity(
         enteredType,
         enteredParticipant,
         enteredPrice,
         enteredAccessibility
      );
   };

   return (
      <Card className={classes.input}>
         <form onSubmit={addUserHandler}>
            <label htmlFor="type">Type</label>
            <select id="type" onChange={typeChangeHandler}>
               <option value="education">Education</option>
               <option value="recreational">Recreational</option>
               <option value="social">Social</option>
               <option value="charity">Charity</option>
               <option value="cooking">Cooking</option>
               <option value="relaxation">Relaxation</option>
               <option value="music">Music</option>
               <option value="busywork">Busywork</option>
            </select>
            <label htmlFor="participants">Participants</label>
            <input
               id="participant"
               type="number"
               value={enteredParticipant}
               onChange={participantChangeHandler}
            />
            <div>
               <p>Select Price Range</p>${" "}
               <input
                  onChange={handleCheckboxtype}
                  type="radio"
                  name="prices"
                  value="0.2"
               />
               $${" "}
               <input
                  onChange={handleCheckboxtype}
                  type="radio"
                  name="prices"
                  value="0.4"
               />
               $$${" "}
               <input
                  onChange={handleCheckboxtype}
                  type="radio"
                  name="prices"
                  value="0.6"
               />
               $$$${" "}
               <input
                  onChange={handleCheckboxtype}
                  type="radio"
                  name="prices"
                  value="0.8"
               />
               $$$$${" "}
               <input
                  onChange={handleCheckboxtype}
                  type="radio"
                  name="prices"
                  value="1"
               />
            </div>
            <Button type="submit">Search Activity</Button>
         </form>
      </Card>
   );
};

export default SearchActivity;
