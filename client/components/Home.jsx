
import React, { Component } from "react";
import {Link} from "react-router-dom";
import {getYears} from "./CompetitionService.js"



class Home extends React.Component {
    constructor() {
        super();
        this.state = { years: [] };
      }

      componentDidMount() {
        getYears().then((result) => {
          let years = Array.from(result.data);
          this.setState({years: years});
        });
      }

    render() {
        
        return (
            <div>

                <div className="page-header">
                    <h2>Axels midsommarfiske</h2>
                </div>
                <img className="img-responsive" src="./client/images/group/group_2017.JPG" />
                <p />
                <p>På midsommardagen varje år samlas släkt och vänner för den stora fisketävlingen i Konrads tjärn. Många abborrar har dragits upp genom åren. Förutom äran vinner segraren en guldskimrande vandringspokal.</p>
                <p>Tröstpriset "Trollet" delas också ut till en lycklig vinnare.</p>


                <div className="row" id="tavling">
                    <div className="col-sm-8 col-md-12 col-lg-12">
                        <h2>Resultat</h2>
                        <p>Välj år för att se resultatlistan.</p>

                        <div className="panel-group" id="accordion">
                        {this.state.years.map(year => <Year year={year} key={year} />)}

                        </div>

                    </div>
                </div>

            </div>
        );
    }
    
}
const Year = (props) => {
    return (
      <div>
        <Link to={'competition/' + props.year}>{props.year}</Link>
      </div>);
    
  }

export default Home;





