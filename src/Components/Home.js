import React, { useState } from "react";
import AddActivity from "./AddActivity";
import ActivityList from "./ActivityList";

const Home = () => {
   const [activityList, setActivityList] = useState([]);

   const addActivityHandler = (type, participants, price, accessibility) => {
      setActivityList((prevActivityList) => {
         return [
            ...prevActivityList,
            {
               type: type,
               participant: participants,
               price: price,
               accessibility: accessibility,
               id: Math.random().toString(),
            },
         ];
      });
   };

   return (
      <div>
         <h1>Search Activities</h1>
         <AddActivity onAddActivity={addActivityHandler} />
         <ActivityList activities={activityList} />
      </div>
   );
};

export default Home;
