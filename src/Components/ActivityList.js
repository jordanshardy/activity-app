import Card from "./UI/Card";
import classes from "./ActivityList.module.css";

const ActivityList = (props) => {
   // use props to access an array of users and display them in LI elements
   return (
      <Card className={classes.activity}>
         <ul>
            {props.activities.map((activity) => (
               <li key={activity.id}>
                  {activity.type} {activity.participant}
                  {activity.price} {activity.accessibility}
               </li>
            ))}
         </ul>
      </Card>
   );
};

export default ActivityList;
