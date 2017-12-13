import React, { Component } from "react";

class Statistics extends React.Component {

    render() {
        console.log('statistics is rendered');
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
                                <tr>
                                    <td>Petra</td>
                                    <td>10p</td>
                                </tr>
                                <tr>
                                    <td>Mattias</td>
                                    <td>1p</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Statistics