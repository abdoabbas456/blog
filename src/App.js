import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchComponent";
import { Router } from "@reach/router";
import Details from "./detials";
import ThemeContext from "./ThemeContext";
import NavBar from "./Navbar";

const App = () => {
  const themeHook = useState("darkblue");

  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
       <NavBar></NavBar>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
