import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Search from "./components/Search";
import History from "./components/History";

const App = () => {
  return (
    <div style={container}>
      <BrowserRouter>
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

//Styling
const container = {
	height: "auto",
	backgroundColor: "#f5eaea",
  };

export default App;
