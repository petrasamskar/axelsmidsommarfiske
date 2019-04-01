
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getYears } from "./CompetitionService.js"


class Home extends React.Component {
    constructor() {
        super();
        this.state = { years: [] };
    }

    componentDidMount() {
        getYears().then((result) => {
            let years = Array.from(result.data);
            this.setState({ years: years });
        });
    }

    render() {

        return (
            <div>
                
                <div className="dropdown show">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Välj År
                </a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        {this.state.years.map(year => <Year year={year} key={year} />)}
                    </div>
                </div>
                <p />
                <div className="card" >
                    <div className="card-body">
                        <p className="card-text">På midsommardagen varje år samlas släkt och vänner för den stora fisketävlingen i Konrads tjärn. Många abborrar har dragits upp genom åren. Förutom äran vinner segraren en guldskimrande vandringspokal.</p>
                        <p className="card-text">Tröstpriset "Trollet" delas också ut till en lycklig vinnare.</p>

                    </div>
                    <img className="card-img-top" src="./images/group/group_2018.JPG" />

                </div>
                

            </div>
        );
    }

}


const Year = (props) => {
    return (
        <Link className="dropdown-item" to={'competition/' + props.year}>{props.year}</Link>
    );

}


export default Home;





