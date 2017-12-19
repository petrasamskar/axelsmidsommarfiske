/*
    ./client/index.js
    which is the webpack entry file
*/
import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main.jsx";
import Clock from "./components/Clock.jsx";


ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
);


ReactDOM.render(
    <Clock/>, 
    document.getElementById("clockdiv")
  );

  

