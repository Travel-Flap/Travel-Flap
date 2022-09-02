import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MultiCardSlider.css';
// import "/src/App.css";

export default class ImageSlider extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            // autoplay: true,
            // speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            cssEase: "linear"
        };
        return (
            <div className='multicardscontainer'>
                
                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper">
                        <div className="card multisection-image">
                            <div className="card-image">
                                <img src="images/TravelImage2.jpg" />
                            </div>
                            <div className="details">
                                <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card multisection-image">
                            <div className="card-image">
                                <img src="images/TravelImage6.jpg" />
                            </div>
                            <div className="details">
                                <h2>Amirt Maan <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card multisection-image">
                            <div className="card-image">
                                <img src="images/TravelImage3.jpg" />
                            </div>
                            <div className="details">
                                <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card multisection-image">
                            <div className="card-image">
                                <img src="images/TravelImage4.jpg" />
                            </div>
                            <div className="details">
                                <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}
