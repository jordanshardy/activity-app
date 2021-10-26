import React, { useState, useEffect } from "react";
import Card from "./UI/Card";
import classes from "./SearchActivity.module.css";
import Button from "./UI/Button";

const SearchActivity = (props) => {
   const [enteredType, setEnteredType] = useState("");
   const [enteredParticipant, setEnteredParticipant] = useState(0);
   const [enteredPrice, setEnteredPrice] = useState("");

   const [enteredActivity, setEnteredActivity] = useState("");
   const [enteredActivityParticipants, setenteredActivityParticipants] =
      useState("");
   const [enteredActivityPrice, setEnteredActivityPrice] = useState("");

   function categoryReset() {
      var dropDown = document.getElementById("category");
      dropDown.selectedIndex = 0;
   }

   function participantReset() {
      var dropDown = document.getElementById("participant");
      dropDown.selectedIndex = 0;
   }

   // function to update url based on Category
   async function categoryResult() {
      participantReset();

      if (enteredType) {
         let result = await fetch(
            `https://www.boredapi.com/api/activity?type=${enteredType}`
         );
         const activities = await result.json();
         console.log(activities);
         setEnteredActivity(activities.activity);
         setenteredActivityParticipants(activities.participants);
         setEnteredActivityPrice(changePriceToDollars(activities.price));
      } else {
         return;
      }
   }

   async function participantResult() {
      categoryReset();

      if (enteredParticipant) {
         let result = await fetch(
            `https://www.boredapi.com/api/activity?participants=${enteredParticipant}`
         );
         const activities = await result.json();
         console.log(activities);
         console.log(enteredParticipant);
         setEnteredActivity(activities.activity);
         setenteredActivityParticipants(activities.participants);
         setEnteredActivityPrice(changePriceToDollars(activities.price));
      } else {
         return;
      }
   }

   const typeChangeHandler = (event) => {
      setEnteredType(event.target.value);
   };

   const participantChangeHandler = (event) => {
      setEnteredParticipant(event.target.value);
   };

   const priceChangeHandler = (event) => {
      setEnteredPrice(event.target.value);
   };

   const searchActivityHandler = (event) => {
      // categoryResult();
      // participantsResult();
      // preventDefault prevents the url from printing the value from the form
      event.preventDefault();
      // setEnteredParticipant("");
      // setEnteredType("");
      // setEnteredPrice("");

      // instead of console.log the data from username and age input, we use props and point to a function
      // (that was defined in App.js) to add the name and age to the empty state array
      // props.onSearchActivity(enteredType, enteredParticipant, enteredPrice);
   };

   function changePriceToDollars(scale) {
      if (scale === 0) {
         return "Free";
      } else if (scale <= 0.2) {
         return "$$";
      } else if (scale <= 0.4) {
         return "$$$";
      } else if (scale <= 0.6) {
         return "$$$";
      } else if (scale <= 0.8) {
         return "$$$$";
      } else if (scale <= 1) {
         return "$$$$$";
      }
   }

   // useEffect(() => {
   //    fetch(`https://www.boredapi.com/api/activity?type=${enteredType}`)
   //     .then(response => response.json())
   //     .then(json => console.log(json))
   // }, [enteredType]);

   return (
      <>
         {/* <Button onClick={() => setEnteredType(enteredType)}>Category</Button> */}

         <Card className={classes.input}>
            <form onSubmit={searchActivityHandler}>
               <label htmlFor="Category">Category</label>
               <select id="category" onChange={typeChangeHandler}>
                  <option value="false">Choose Category...</option>
                  <option value="education">Education</option>
                  <option value="recreational">Recreational</option>
                  <option value="social">Social</option>
                  <option value="charity">Charity</option>
                  <option value="cooking">Cooking</option>
                  <option value="relaxation">Relaxation</option>
                  <option value="music">Music</option>
                  <option value="busywork">Busywork</option>
               </select>
               <Button onClick={categoryResult} type="submit">
                  Show Activity
               </Button>
            </form>

            <form onSubmit={searchActivityHandler}>
               <label htmlFor="participants">Participants</label>
               <select id="participant" onChange={participantChangeHandler}>
                  <option value="false">Choose Participants...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
               </select>
               <Button onClick={participantResult} type="submit">
                  Show Activity
               </Button>
            </form>

            <form>
               <label htmlFor="price">Price</label>
               <select onChange={priceChangeHandler}>
                  <option value="default-participants">Choose Price...</option>
                  <option value="1">$</option>
                  <option value="2">$$</option>
                  <option value="3">$$$</option>
                  <option value="4">$$$$</option>
                  <option value="5">$$$$$</option>
               </select>
               <Button type="submit">Show Activity</Button>
            </form>
         </Card>
         <Card>
            {enteredActivity && (
               <p>
                  <strong>Activity:</strong> {enteredActivity}
               </p>
            )}
            {enteredActivityParticipants && (
               <p>
                  <strong>Participants:</strong> {enteredActivityParticipants}
               </p>
            )}
            {enteredActivityPrice && (
               <p>
                  <strong>Price:</strong>{" "}
                  {changePriceToDollars(enteredActivityPrice)}
               </p>
            )}
         </Card>
      </>
   );
};

export default SearchActivity;
