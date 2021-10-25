import React, { useState } from "react";
import SearchActivity from "./SearchActivity";
import ActivityList from "./ActivityList";

const Home = () => {
   const [activityList, setActivityList] = useState([]);

   const searchActivityHandler = (type, participants, price, accessibility) => {
      setActivityList((prevActivityList) => {
         return [
            ...prevActivityList,
            {
               type: type,
               participant: participants,
               price: price,
               accessibility: accessibility,
            },
         ];
      });
   };

   return (
      <div>
         <h1>Search Activities</h1>
         <SearchActivity onSearchActivity={searchActivityHandler} />
         <ActivityList activities={activityList} />
      </div>
   );
};

export default Home;
