import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchComponent";
import { Router } from "@reach/router";
import Details from "./detials";
import ThemeContext from "./ThemeContext";
import NavBar from "./Navbar";
import Home from "./component/home"
const App = () => {
 

  return (
   <Home/>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
