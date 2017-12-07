import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./Home.jsx";
import Rules from "./Rules.jsx";

class Main extends Component {
  render() {
    return (
      <HashRouter>

        <div>

          <div className="container">
            <div className="navbar navbar-inverse navbar-fixed-top">
              <div className="navbar-header">
                <a className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </a>
              </div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li><NavLink className="glyphicon glyphicon-home" to="/" /></li>
                  <li><NavLink to="/rules">Regler och stadgar</NavLink></li>
                  <li><NavLink to="/images">Bilder</NavLink></li>
                  <li><NavLink to="/statistics">Statistik</NavLink></li>
                </ul>
                <div className="navbar-collapse collapse" id="clockdiv"></div>
              </div>
            </div>
          </div>

          <div>
            <div className="container-fluid">
              <div id="content" className="jumbotron">
                <Route exact path="/" component={Home} />
                <Route path="/rules" component={Rules} />
                <Route path="/images" component={Home} />
                <Route path="/statistics" component={Home} />

              </div>
              <div className="row">
                <div className="col-sm-12">
                  <p>© Copyright 2015 Sämskar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HashRouter>

    );
  }
}

export default Main;