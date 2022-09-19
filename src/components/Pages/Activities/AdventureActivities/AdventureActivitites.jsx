import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef } from "react";
import { useEffect } from "react";
import "./AdventureActivities.css";
// import { ButtonBase } from "@material-ui/core";
import { Button } from "react-bootstrap"
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa';

export const AdventureActivities = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
        <div className="adventureactivitymaindiv">
            {/* <h1>Ipl</h1> */}
            <div className="adventureactivityheadingcontainer" >
                <h2 className="adventureactivityheading1">Adventure Activities</h2>
                {/* <div className="internationalheading2">
                    <div className="internationalheading">Asia</div>
                    <div className="internationalheading">Africa</div>
                    <div className="internationalheading">America</div>
                    <div className="internationalheading">Antarctica</div>
                    <div className="internationalheading">Australia</div>
                    <div className="internationalheading">Europe</div>
                </div> */}

                <div className="viewalladventureactivitybuttons" >
                    <p className="viewalladventureactivitytext">view deals</p>
                    <div className="adventureactivityheadingbuttons">
                        {/* <div style={{ display: "flex" }}>
                            <ButtonBase
                                style={{
                                    width: 35,
                                    height: 35,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: 10,
                                    marginTop:8,
                                    borderRadius: 7,
                                    boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                                    cursor: "pointer",

                                }}
                                className="buttons adventureactivitybutton1"
                                onClick={() => sliderRef.current.slickPrev()}
                            >
                                <ArrowBackIos />
                            </ButtonBase>
                            <ButtonBase
                                style={{
                                    width: 35,
                                    height: 35,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 7,
                                    marginTop:8,
                                    boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                                    cursor: "pointer",
                                }}
                                className="buttons"
                                onClick={() => sliderRef.current.slickNext()}
                            >
                                <ArrowForwardIos />
                            </ButtonBase>
                        </div> */}
                        <div style={{ display: "flex" }}>
                            <FaAngleLeft size={"2.5em"}
                            onClick={() => sliderRef.current.slickPrev()}
                            />
                            {/* <ButtonBase
                                style={{
                                    width: 35,
                                    height: 35,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: 10,
                                    borderRadius: 7,
                                    color:"blue",
                                    boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                                    cursor: "pointer",
                                    border:"2px solid black",
                                }}
                                className="buttons exclusivebutton1"
                                onClick={() => sliderRef.current.slickPrev()}
                            >
                                <ArrowBackIos />
                            </ButtonBase> */}
                            {/* <ButtonBase
                                style={{
                                    width: 35,
                                    height: 35,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 7,
                                    boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                                    cursor: "pointer",
                                }}
                                className="buttons"
                                onClick={() => sliderRef.current.slickNext()}
                            >
                                <ArrowForwardIos />
                            </ButtonBase> */}
                            <FaAngleRight size={"2.5em"}
                               onClick={() => sliderRef.current.slickNext()}
                           />
                        </div>
                    </div>

                </div>
            </div>

            <div className="adventureactivityslidercontainer">
                <Slider
                    arrows={false}
                    // autoplay={true}
                    speed={1000}
                    autoplaySpeed={2000}
                    dotsclassName="slick-dots line-indicator"
                    ref={sliderRef}
                    slidesToShow={4}
                    slidesToScroll={2}
                    responsive={[
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
                    ]}
                    customPaging={(i) => (
                        <div
                            style={{
                                width: "100%",
                                top: "-10px",
                                opacity: 0,
                            }}
                        >
                            {i}
                        </div>
                    )}
                >
                    {/* <div className="experimentdivcontainer" style={{display:"flex",flexDirection:"row"}}/> */}

                    
                    <div class="card mb-3 adventureactivityouterdiv" >
                        <div class="row g-0 adventureactivityimagetextcontainer">
                            <div class="col-md-8 adventureactivitycardimage">
                                <img src="https://media.istockphoto.com/photos/senju-fall-picture-id1400925699?b=1&k=20&m=1400925699&s=170667a&w=0&h=mJTG8jdAnbIeY8-vgYmPL3T15uSCn-owtXcqUi0gho4=" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-4 adventureactivitytextcard">
                                <div class="card-body adventureactivitycarddescmain">
                                    <h3 class="card-title adventureactivitycardtitle">River Rafting</h3>
                                    <p class="card-text adventureactivitycard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="adventureactivitybutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 adventureactivityouterdiv" >
                        <div class="row g-0 adventureactivityimagetextcontainer">
                            <div class="col-md-8 adventureactivitycardimage">
                                <img src="https://media.istockphoto.com/photos/senju-fall-picture-id1400925699?b=1&k=20&m=1400925699&s=170667a&w=0&h=mJTG8jdAnbIeY8-vgYmPL3T15uSCn-owtXcqUi0gho4=" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-4 adventureactivitytextcard">
                                <div class="card-body adventureactivitycarddescmain">
                                    <h3 class="card-title adventureactivitycardtitle">Sea Diving</h3>
                                    <p class="card-text adventureactivitycard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="adventureactivitybutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 adventureactivityouterdiv" >
                        <div class="row g-0 adventureactivityimagetextcontainer">
                            <div class="col-md-8 adventureactivitycardimage">
                                <img src="https://media.istockphoto.com/photos/senju-fall-picture-id1400925699?b=1&k=20&m=1400925699&s=170667a&w=0&h=mJTG8jdAnbIeY8-vgYmPL3T15uSCn-owtXcqUi0gho4=" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-4 adventureactivitytextcard">
                                <div class="card-body adventureactivitycarddescmain">
                                    <h3 class="card-title adventureactivitycardtitle">Paragliding</h3>
                                    <p class="card-text adventureactivitycard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="adventureactivitybutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 adventureactivityouterdiv" >
                        <div class="row g-0 adventureactivityimagetextcontainer">
                            <div class="col-md-8 adventureactivitycardimage">
                                <img src="https://media.istockphoto.com/photos/senju-fall-picture-id1400925699?b=1&k=20&m=1400925699&s=170667a&w=0&h=mJTG8jdAnbIeY8-vgYmPL3T15uSCn-owtXcqUi0gho4=" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-4 adventureactivitytextcard">
                                <div class="card-body adventureactivitycarddescmain">
                                    <h3 class="card-title adventureactivitycardtitle">Xline Ride</h3>
                                    <p class="card-text adventureactivitycard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="adventureactivitybutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 adventureactivityouterdiv" >
                        <div class="row g-0 adventureactivityimagetextcontainer">
                            <div class="col-md-8 adventureactivitycardimage">
                                <img src="https://media.istockphoto.com/photos/senju-fall-picture-id1400925699?b=1&k=20&m=1400925699&s=170667a&w=0&h=mJTG8jdAnbIeY8-vgYmPL3T15uSCn-owtXcqUi0gho4=" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-4 adventureactivitytextcard">
                                <div class="card-body adventureactivitycarddescmain">
                                    <h3 class="card-title adventureactivitycardtitle">Gyrocopter Ride.</h3>
                                    <p class="card-text adventureactivitycard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="adventureactivitybutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 adventureactivityouterdiv" >
                        <div class="row g-0 adventureactivityimagetextcontainer">
                            <div class="col-md-8 adventureactivitycardimage">
                                <img src="https://media.istockphoto.com/photos/senju-fall-picture-id1400925699?b=1&k=20&m=1400925699&s=170667a&w=0&h=mJTG8jdAnbIeY8-vgYmPL3T15uSCn-owtXcqUi0gho4=" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-4 adventureactivitytextcard">
                                <div class="card-body adventureactivitycarddescmain">
                                    <h3 class="card-title adventureactivitycardtitle">Downhill Bike Riding</h3>
                                    <p class="card-text adventureactivitycard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="adventureactivitybutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 adventureactivityouterdiv" >
                        <div class="row g-0 adventureactivityimagetextcontainer">
                            <div class="col-md-8 adventureactivitycardimage">
                                <img src="https://media.istockphoto.com/photos/senju-fall-picture-id1400925699?b=1&k=20&m=1400925699&s=170667a&w=0&h=mJTG8jdAnbIeY8-vgYmPL3T15uSCn-owtXcqUi0gho4=" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-4 adventureactivitytextcard">
                                <div class="card-body adventureactivitycarddescmain">
                                    <h3 class="card-title adventureactivitycardtitle">Ekart Riding</h3>
                                    <p class="card-text adventureactivitycard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="adventureactivitybutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}



                </Slider>
            </div>
        </div>
    );
};

