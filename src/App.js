import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
   return (
      <Router>
         <div className="App">
            <Nav />
            <Switch>
               <Route path="/" exact component={Home} />
               <Route pathh="about" component={About} />
            </Switch>
         </div>
      </Router>
   );
}

export default App;
