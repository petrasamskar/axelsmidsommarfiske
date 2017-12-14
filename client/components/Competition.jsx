
import React, { Component } from "react";
import {getParticipants} from "./CompetitionService.js"



class Competition extends React.Component {

  constructor() {
    super();
    this.state = { participants: [] };
    
  }

  componentDidMount() {
    getParticipants(this.props.match.params.year).then((result) => {
      let participants = Array.from(result.data);
      
      this.setState({participants: participants});
    });
  }


  render() {
    return (
      <div>
        <div className="page-header">

          <h2>Resultat {this.props.match.params.year}</h2>
        </div>
        <div className="row">
          <div className="col-sm-8 col-md-12 col-lg-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>Deltagare/Lag</td>
                </tr>
              </thead>
              <tbody>
                {this.state.participants.map(participant => <Participant place={participant.place} score={participant.score} name={participant.name} key={participant.name} />)}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    );
  }

}



const Participant = (props) => {
  return (
    <tr>
      <td>
      {props.place}. {props.name}
      </td>
      <td>{props.score}p</td>
    </tr>
  );

}

export default Competition


