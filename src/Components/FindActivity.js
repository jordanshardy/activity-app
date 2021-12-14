import React, { useState } from "react";
import TypeForm from "./TypeForm";
import ParticipantsForm from "./ParticipantsForm";
import PriceForm from "./PriceForm";
import {
   Button,
   Header,
   RadioForm,
   StyledResults,
   StyledForm,
   Paragraph,
   Container,
} from "./styles";

// this is the page where a user will select how they would like to search for an acitivty
// options: by type, by participants or by price

const FindActivity = () => {
   // search by states
   const [searchBy, setSearchBy] = useState("");

   // search by options
   const [type, setType] = useState("");
   const [participants, setParticipants] = useState("");
   const [price, setPrice] = useState("");

   // API call results states
   const [result, setResult] = useState({});

   // updating our state value to reflect what the user opted to search by
   function onFormChange(event) {
      setSearchBy(event.target.value);
   }

   function searchParams() {
      switch (searchBy) {
         case "Type":
            return `activity?type=${type}`;
         case "Participants":
            return `activity?participants=${participants}`;
         case "Price":
            return `activity?minprice=0&maxprice=${price}`;
         case "RandomActivity":
            return `activity/`;
         default:
            return `activity/`;
      }
   }

   // API call to get an activity
   async function getResult() {
      const apiResult = await fetch(
         `https://www.boredapi.com/api/${searchParams()}`
      );
      const activities = await apiResult.json();
      //update the state with api data
      setResult(activities);
   }

   function renderForm(searchByState) {
      let form;
      switch (searchByState) {
         case "Type":
            form = (
               <TypeForm
                  setType={setType}
                  setParticipants={setParticipants}
                  setPrice={setPrice}
               />
            );
            return form;
         case "Participants":
            form = (
               <ParticipantsForm
                  setType={setType}
                  setParticipants={setParticipants}
                  setPrice={setPrice}
               />
            );
            return form;
         case "Price":
            form = (
               <PriceForm
                  setType={setType}
                  setParticipants={setParticipants}
                  setPrice={setPrice}
               />
            );
            return form;
      }
   }

   // handling data to make price readable
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

   // assign my component to a variable, then do {variable} in render
   return (
      <Container>
         <Header>Activity Search</Header>
         <Paragraph>Search by:</Paragraph>
         <RadioForm onChange={onFormChange}>
            <input type="radio" value="Type" name="searchBy" /> Type
            <input type="radio" value="Participants" name="searchBy" />{" "}
            Participants
            <input type="radio" value="Price" name="searchBy" /> Price
            <input type="radio" value="RandomSearch" name="searchBy" /> Pick for
            me!
         </RadioForm>

         {searchBy && (
            <>
               {renderForm(searchBy)}
               <Button onClick={getResult}>
                  Release me from boredom prison
               </Button>
            </>
         )}

         {result.activity && (
            <StyledForm>
               <StyledResults>
                  <Paragraph>
                     You're gonna:{" "}
                     {result.activity.charAt(0).toLowerCase() +
                        result.activity.slice(1)}
                     . You'll need:{" "}
                     {result.participants < 2
                        ? " you, yourself and you"
                        : result.participants + " friends"}
                     .
                  </Paragraph>
                  <Paragraph>
                     <strong>Price range:</strong>{" "}
                     {changePriceToDollars(result.price)}
                  </Paragraph>
               </StyledResults>
            </StyledForm>
         )}
      </Container>
   );
};

export default FindActivity;
