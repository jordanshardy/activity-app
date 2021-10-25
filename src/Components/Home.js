import React, { useState } from "react";
import SearchActivity from "./SearchActivity";

const Home = () => {
   const [activityList, setActivityList] = useState([]);


   return (
      <div>
         <h1>Search Activities</h1>
         <SearchActivity  />
      </div>
   );
};

export default Home;
