
import React, { Component } from "react";

class Home extends React.Component {

    render() {
        return (
            <div>
                <div className="page-header">
                    <h2>Axels midsommarfiske igen</h2>
                </div>
                <img className="img-responsive" src="./client/images/group/group_2017.JPG" />
                <p />
                <p>På midsommardagen varje år samlas släkt och vänner för den stora fisketävlingen i Konrads tjärn. Många abborrar har dragits upp genom åren. Förutom äran vinner segraren en guldskimrande vandringspokal.</p>
                <p>Tröstpriset "Trollet" delas också ut till en lycklig vinnare.</p>


                <div className="row">
                    <div className="col-sm-8 col-md-12 col-lg-12">
                        <h2>Resultat</h2>
                        <p>Välj år för att se resultatlistan.</p>
                        <div className="panel-group" id="accordion">
                            <div className="panel panel-default">

                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#{{year}}"></a>
                                    </h4>
                                </div>
                                <div id="{{year}}" className="panel-collapse">
                                    <div className="panel-body">
                                        <div className="result">
                                            <table className="table table-striped">
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Petra</td>
                                                        <td>10p</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Mattias</td>
                                                        <td>5p</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="result">
                                            <img id="img{{year}}" className="img-thumbnail" src="#" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>

        );
    }
}
export default Home
