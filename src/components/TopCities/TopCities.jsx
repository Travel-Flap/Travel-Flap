import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import { MdLocationCity } from "react-icons/md";
import './TopCities.css';
// import "/src/App.css";

export default class TopCities extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 700,
            slidesToShow: 4,
            slidesToScroll: 1,
            cssEase: "linear",
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 950,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className='topcitiescontainer'>
                <div className='topcities_title'>
                    <h1> <MdLocationCity />
                        Top Cities
                    </h1>
                {/* <span><p>to explore</p></span> */}
                </div>

                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper">
                        <div className="card topcitiesdiv">
                            <div className="card-image">
                                <img src="images/TopCitiesImage7.jpg" />
                            </div>
                            <div className="topcitiesdetails">
                                <h2>Goa <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p>

                                </span>
                                    <Button variant="primary">Explore</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card topcitiesdiv">
                            <div className="card-image">
                                <img src="images/TopCitiesImage2.jpg" />
                            </div>
                            <div className="topcitiesdetails">
                                <h2>Singapore <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p>
                                </span>
                                    <Button variant="primary">Explore</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card topcitiesdiv">
                            <div className="card-image">
                                <img src="images/TopCitiesImage3.jpg" />
                            </div>
                            <div className="topcitiesdetails">
                                <h2>Oman <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Explore</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card topcitiesdiv">
                            <div className="card-image">
                                <img src="images/TopCitiesImage4.jpg" />
                            </div>
                            <div className="topcitiesdetails">
                                <h2>Paris <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Explore</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card topcitiesdiv">
                            <div className="card-image">
                                <img src="images/TopCitiesImage5.jpg" />
                            </div>
                            <div className="topcitiesdetails">
                                <h2>Dubai <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Explore</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card topcitiesdiv">
                            <div className="card-image">
                                <img src="images/TopCitiesImage6.jpg" />
                            </div>
                            <div className="topcitiesdetails">
                                <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Explore</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card topcitiesdiv">
                            <div className="card-image">
                                <img src="images/TopCitiesImage8.jpg" />
                            </div>
                            <div className="topcitiesdetails">
                                <h2>New York <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Explore</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card topcitiesdiv">
                            <div className="card-image">
                                <img src="images/TopCitiesImage9.jpg" />
                            </div>
                            <div className="topcitiesdetails">
                                <h2>France <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Explore</Button>
                                </h2>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}
