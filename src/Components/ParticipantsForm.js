import React from "react";
import { DropdownForm, StyledSelect, StyledOption } from "./styles";

const ParticipantsForm = ({ setParticipants, setType, setPrice }) => {
   function onChange(event) {
      setParticipants(event.target.value);
      setType("");
      setPrice("");
   }

   return (
      <DropdownForm>
         <StyledSelect onChange={onChange}>
            <StyledOption value="1">1</StyledOption>
            <StyledOption value="2">2</StyledOption>
            <StyledOption value="3">3</StyledOption>
            <StyledOption value="4">4</StyledOption>
            <StyledOption value="5">5</StyledOption>
            <StyledOption value="6">6</StyledOption>
            <StyledOption value="7">7</StyledOption>
            <StyledOption value="8">8</StyledOption>
         </StyledSelect>
      </DropdownForm>
   );
};

export default ParticipantsForm;
