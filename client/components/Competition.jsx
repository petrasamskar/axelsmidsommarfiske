
import React, { Component } from "react";
import { getParticipants } from "./CompetitionService.js";
import {deleteParticipant} from "./CompetitionService.js";
import ReactImageFallback from "react-image-fallback";


class Competition extends React.Component {

  constructor() {
    super();
    this.state = { participants: [] };

  }

  componentDidMount() {
    getParticipants(this.props.match.params.year).then((result) => {
      let participants = Array.from(result.data);

      this.setState({ participants: participants });
    });
  }

  

  

  render() {
    return (
      <div>
        <div className="page-header">

          <h2>Resultat {this.props.match.params.year}</h2>
        </div>
        <div className="card" >
          <ReactImageFallback
            src={"./client/images/group/group_" + this.props.match.params.year + ".JPG"}
            fallbackImage="./client/images/no_image.jpg"
            className="card-img-top" />
          <div className="card-body">
            <div className="card-text">
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


