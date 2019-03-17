import React, { Component } from "react";
import { getImages } from "./CompetitionService.js"

class Images extends React.Component {

    constructor() {
        super();
        this.state = { images: [] };

    }

    componentDidMount() {
        getImages().then((result) => {
            let images = Array.from(result.data);
            this.setState({ images: images });
        });
    }


    render() {
        return (
            <div>
                <div className="container gal-container">
                    <div className="row text-center text-lg-left">
                        {this.state.images.map(image => <Image name={image} key={image} />)}
                    </div>
                </div>
            </div>
        );
    }
}


const Image = (props) => {
    return (
        <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
            <div className="box">
                <a href="#" data-toggle="modal" data-target={'#' + (props.name).substring(0, (props.name).indexOf('.'))}>
                    <img src={'./images/other/' + props.name} />
                </a>
                <div className="modal fade" id={(props.name).substring(0, (props.name).indexOf('.'))} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <div className="modal-body">
                                <img src={'./images/other/' + props.name} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Images
