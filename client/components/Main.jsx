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
import Admin from "./Admin.jsx";


class Main extends Component {
  render() {
    return (
      <HashRouter>

        <div>

          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="navbar-brand mb-0 h1" href="#">Axels midsommarfiske <span className="sr-only"></span></a>
                  <a className="nav-item nav-link" href="#/rules">Regler och stadgar</a>
                  <a className="nav-item nav-link" href="#/images">Bilder</a>
                  <a className="nav-item nav-link" href="#/winners">Statistik</a>
                  <div className="nav-item nav-link" id="clockdiv"></div>
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
                <Route path="/admin" component={Admin}/> 
              </div>
            </div>
          </div>
        </div>
      </HashRouter>

    );
  }
}


export default Main;