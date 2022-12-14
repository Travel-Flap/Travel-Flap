import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import './EasyVisaDestinations.css';
// import "/src/App.css";

export default class TravelStories extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            autoplay: true,
            speed:700,
            slidesToShow: 4,
            slidesToScroll: 2,
            cssEase: "linear",
            // arrows:true,
            // arrows : false, 
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
                    breakpoint:800,
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
            <div className='travelstoriescontainer'>
                
                <Slider {...settings} style={{}} className="multiCardSlider">
                    <div className="card-wrapper">
                        <div className="card travelstoriesmaindiv">
                            <div className="card-image travelstoriescardimage">
                                <img src="images/EasyVisaDestinations/bolivia.jpg" />
                            </div>
                            <div className="travelstorydetails">
                                <h2>Bolivia <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p>
                                    
                                    </span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card travelstoriesmaindiv">
                            <div className="card-image travelstoriescardimage">
                                <img src="images/EasyVisaDestinations/dubai.jpg" />
                            </div>
                            <div className="travelstorydetails">
                                <h2>Dubai <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p>
                                    </span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card travelstoriesmaindiv">
                            <div className="card-image travelstoriescardimage">
                                <img src="images/EasyVisaDestinations/fiji islands.jpg" />
                            </div>
                            <div className="travelstorydetails">
                                <h2>Fiji islands <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card travelstoriesmaindiv">
                            <div className="card-image travelstoriescardimage">
                                <img src="images/EasyVisaDestinations/jordan.jpg" />
                            </div>
                            <div className="travelstorydetails">
                                <h2>Jordan <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card travelstoriesmaindiv">
                            <div className="card-image travelstoriescardimage">
                                {/* */}
                                {/* images/TravelStoriesImage5.jpg */}
                                <img src="images/EasyVisaDestinations/Kenya.jpg " />
                            </div>
                            <div className="travelstorydetails">
                                <h2>Kenya <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card travelstoriesmaindiv">
                            <div className="card-image travelstoriescardimage">
                                <img src="images/TravelStories/river.jpg " />
                            </div>
                            <div className="travelstorydetails">
                                <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card travelstoriesmaindiv">
                            <div className="card-image travelstoriescardimage">
                                <img src="images/EasyVisaDestinations/madgascar.jpg" />
                            </div>
                            <div className="travelstorydetails">
                                <h2>1Madgascar <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card travelstoriesmaindiv">
                            <div className="card-image travelstoriescardimage">
                                <img src="images/EasyVisaDestinations/Seychelles.jpg" />
                            </div>
                            <div className="travelstorydetails">
                                <h2>Seychelles <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}
