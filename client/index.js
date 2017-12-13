/*
    ./client/index.js
    which is the webpack entry file
*/
import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main.jsx";
import Clock from "./components/Clock.jsx";
import Competition from "./components/Competition.jsx";
import Home from "./components/Home.jsx";

ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
);


ReactDOM.render(
    <Clock/>, 
    document.getElementById("clockdiv")
  );

  /*ReactDOM.render(
    <Home url="http://localhost:3001/api/years"/>, 
    document.getElementById("content")
  );*/


/*ReactDOM.render(
  <Competition/>, document.getElementById("tavling")
);*/

