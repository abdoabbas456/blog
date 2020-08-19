import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchComponent";
import { Router } from "@reach/router";
import Details from "./detials";
import ThemeContext from "./ThemeContext";
import NavBar from "./Navbar";
import Main from "./component/main"
import Benfits from "./component/benefit"
const App = () => {
 

  return (
   <Main/>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
