import React from "react";
import { DropdownForm, StyledSelect } from "./styles";

const PriceForm = ({ setPrice, setType, setParticipants }) => {
   function onChange(event) {
      setPrice(event.target.value);
      setType("");
      setParticipants("");
   }

   return (
      <DropdownForm>
         <StyledSelect onChange={onChange}>
            <option value="Free">Free</option>
            <option value="0.2">$</option>
            <option value="0.4">$$</option>
            <option value="0.6">$$$</option>
            <option value="0.8">$$$$</option>
            <option value="1">$$$$$</option>
         </StyledSelect>
      </DropdownForm>
   );
};

export default PriceForm;
