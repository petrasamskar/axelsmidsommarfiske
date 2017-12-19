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
                <div className="page-header">

                    <h2>Bilder</h2>
                </div>


                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        {this.state.images.map(image => <Image name={image} key={image} />)}

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>


            </div>
        );
    }
}


const Image = (props) => {
    return (
        <div className="carousel-item active">
            <img className="d-block w-100" id='{props.name}' src={'client/images/other/' + props.name} />
        </div>
    );

}

export default Images
