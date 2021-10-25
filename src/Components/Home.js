import React, { useState } from "react";
import SearchActivity from "./SearchActivity";
import ActivityList from "./ActivityList";

const Home = () => {
   const [activityList, setActivityList] = useState([]);


   return (
      <div>
         <h1>Search Activities</h1>
         <SearchActivity onSearchActivity={searchActivityHandler} />
      </div>
   );
};

export default Home;
