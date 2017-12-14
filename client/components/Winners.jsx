import React, { Component } from "react";
import {getWinners} from "./CompetitionService.js"

class Winners extends React.Component {

  constructor() {
    super();
    this.state = { winners: [] };
    
  }

  componentDidMount() {
    getWinners().then((result) => {
      let winners = Array.from(result.data);
      
      this.setState({winners: winners});
    });
  }

  render() {
    return (
        <div>
            <div className="page-header">

                <h2>Statistik</h2>
            </div>
            <div className="row">
                <div className="col-sm-8 col-md-12 col-lg-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td>Deltagare/Lag</td>
                                <td>Antal vinster</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.winners.map(winner => <Winner name={winner._id} total={winner.total} key={winner._id} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
    }
}

const Winner = (props) => {
    return (
      <tr>
        <td>
        {props.name}
        </td>
        <td>{props.total}</td>
      </tr>
    );
  
  }

  export default Winners