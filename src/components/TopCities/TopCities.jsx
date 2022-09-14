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
            // dots: true,
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
                    <h2> <MdLocationCity />
                        Top Cities to Explore
                    </h2>
                {/* <span><p>to explore</p></span> */}
                </div>

                <div className='slickslidercontainer'>
                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper">
                        <div className="card topcitiesdiv">
                            <div className="card-image topcitiescardimage">
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
                            <div className="card-image topcitiescardimage">
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
                            <div className="card-image topcitiescardimage">
                                <img src="https://media.istockphoto.com/photos/muttrah-corniche-muscat-oman-picture-id936440920?b=1&k=20&m=936440920&s=170667a&w=0&h=rPQve6hnNUHyhgPv116KL79LugjcZRL_bk7O8JU2z4Q=" />
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
                            <div className="card-image topcitiescardimage">
                                <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
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
                            <div className="card-image topcitiescardimage">
                                <img src="images/PopularDestinationImages/PopularDestinationImageDubai.jpg" />
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

                    {/* <div className="card-wrapper">
                        <div className="card topcitiesdiv">
                            <div className="card-image topcitiescardimage">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgA7NjrOyqboQBa3LLONUV8V8xUQI9i4wDSr1L4Y4jDw&s" />
                            </div>
                            <div className="topcitiesdetails">
                                <h2>Australia <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Explore</Button>
                                </h2>
                            </div>
                        </div>
                    </div> */}

                    <div className="card-wrapper">
                        <div className="card topcitiesdiv">
                            <div className="card-image topcitiescardimage">
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
                            <div className="card-image topcitiescardimage">
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
                
            </div>
        )
    }
}
