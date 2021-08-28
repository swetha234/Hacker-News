import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Search from "./components/Search";
import History  from "./components/History";

//Styling
const container = {
  height: "auto",
  backgroundColor: "#f5eaea",
};
const App = () => {
  return (
    <div style={container}>
	
      <BrowserRouter>
	  <Link to='/history'>History</Link>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/history">
            <History />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
