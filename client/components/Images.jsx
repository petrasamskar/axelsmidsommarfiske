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
            let first = images[0];
            this.setState({first:first});

            let remainingImages = images.slice(1, images.length);
            this.setState({ images: remainingImages });
            
        });
    }

   
    render() {
        
        return (
            <div>
                <div className="page-header">

                    <h2>Bilder</h2>
                </div>

                
             <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active ">
                            <img className="d-block w-100" src={'client/images/other/' + this.state.first} />
                        </div>
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
         <div className="carousel-item">
             <img className="d-block w-100"  src={'client/images/other/' + props.name} />
         </div>
    );

}



export default Images
