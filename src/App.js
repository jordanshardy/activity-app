import React, { useEffect } from "react";
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
          <Route path="about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

useEffect(() => {
  fetch("https://www.boredapi.com/api/activity")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((data) => {
      setData(data);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });
}, []);

export default App;
