import React from "react";
import { DropdownForm, StyledSelect, StyledOption } from "./styles";

const TypeForm = ({ setType, setParticipants, setPrice }) => {
   function onChange(event) {
      setType(event.target.value);
      setParticipants("");
      setPrice("");
   }

   return (
      <DropdownForm>
         <StyledSelect onChange={onChange}>
            <StyledOption value="education">Education</StyledOption>
            <StyledOption value="recreational">Recreational</StyledOption>
            <StyledOption value="social">Social</StyledOption>
            <StyledOption value="charity">Charity</StyledOption>
            <StyledOption value="cooking">Cooking</StyledOption>
            <StyledOption value="relaxation">Relaxation</StyledOption>
            <StyledOption value="music">Music</StyledOption>
            <StyledOption value="busywork">Busywork</StyledOption>
         </StyledSelect>
      </DropdownForm>
   );
};

export default TypeForm;
