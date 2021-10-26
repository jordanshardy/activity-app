import React, { useState } from "react";
import SearchActivity from "./SearchActivity";

import RandomActivityGenerator from './RandomActivityGenerator';


const Home = () => {

   return (
      <div>
         <h1>Search Activities</h1>
         <SearchActivity  />
         <RandomActivityGenerator />

      </div>
   );
};

export default Home;
