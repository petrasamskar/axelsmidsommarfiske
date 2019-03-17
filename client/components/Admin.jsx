import React, { Component } from "react";
import { addParticipant } from "./CompetitionService.js"

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { year: '', score: '' , name: '', place: ''};
        this.handleChanged = this.handleChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChanged(event) {

        if (event.target.id == 'score') {
            this.setState({ score: event.target.value });
        } else if (event.target.id == 'year') {
            this.setState({ year: event.target.value });
        } else if (event.target.id == 'place') {
            this.setState({ place: event.target.value });
        } else if (event.target.id == 'name') {
            this.setState({ name: event.target.value });
        }

    }

    handleSubmit(event) {
        event.preventDefault();
        addParticipant(this.state);
    }

    render() {
        return (
            <div>


                <h2>Administrera fiskeresultat</h2>
                <p>Lägg in resultat efter tävlingen.</p>

                <div className="row">
                    <div className="col-sm-8 col-md-12 col-lg-12">

                        <form className="form-horizontal" role="form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="year">År:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="year" placeholder="År" value={this.state.year} onChange={this.handleChanged} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="year">Placering:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="place" placeholder="Placering" value={this.state.place} onChange={this.handleChanged} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="name">Namn</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="name" placeholder="Namn" value={this.state.name} onChange={this.handleChanged} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="score">Antal fiskar</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="score" placeholder="Antal fiskar" value={this.state.score} onChange={this.handleChanged} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <input type="submit" className="btn btn-primary" value="Spara" />

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin
