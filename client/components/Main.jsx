import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


import Home from "./Home.jsx";
import Rules from "./Rules.jsx";
import Winners from "./Winners.jsx";
import Competition from "./Competition.jsx";
import Images from "./Images.jsx";



class Main extends Component {
  render() {
    return (
      <HashRouter>

        <div>

          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link" href="#">Hem <span className="sr-only"></span></a>
                  <a className="nav-item nav-link" href="#/rules">Regler och stadgar</a>
                  <a className="nav-item nav-link" href="#/images">Bilder</a>
                  <a className="nav-item nav-link" href="#/winners">Statistik</a>
                  <div className="navbar-collapse collapse" id="clockdiv"></div>
                </div>
              </div>
            </nav>

          </div>

          <div>
            <div className="container">
              <div className="jumbotron">
                <Route exact path="/" component={Home} />
                <Route path="/rules" component={Rules} />
                <Route path="/images" component={Images} />
                <Route path="/winners" component={Winners} />
                <Route path="/competition/:year" component={Competition} />
              </div>
            </div>
          </div>
        </div>
      </HashRouter>

    );
  }
}


export default Main;