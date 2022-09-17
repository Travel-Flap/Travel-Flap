import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef } from "react";
import { useEffect } from "react";
import "./BestBudget.css";
import { ButtonBase } from "@material-ui/core";
import { Button } from "react-bootstrap";
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa';


export const BestBudget = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
        <div className="bestbudgetmaindiv">
            {/* <h1>Ipl</h1> */}
            <div className="bestbudgetheadingcontainer" >
                <h2 className="bestbudgetheading1">Best Budget Destinations</h2>
                {/* <div className="experimentheading2">
                <div className="experimentheading" >Deals</div>
                <div>Flights</div>
                <div>Hotels</div>
                <div>Holidays</div>
                <div>Cruise</div>
                </div> */}

                <div className="viewallbestbudgetbuttons" >
                    <p className="viewallbestbudgettext" style={{width:"45"}}>view all deals</p>
                    <div className="bestbudgetheadingbuttons">
                        {/* <div style={{ display: "flex" }}>

                            <ButtonBase
                                style={{
                                    width: 35,
                                    height: 35,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: 10,
                                    borderRadius: 7,
                                    boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                                    cursor: "pointer",

                                }}
                                className="buttons experimentbutton1"
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

            <div className="bestbudgetslidercontainer">
                <Slider
                    arrows={false}
                      autoplay={true}
                    speed={1000}
                    autoplaySpeed={2000}
                    // dots
                    dotsclassName="slick-dots line-indicator"
                    ref={sliderRef}
                    slidesToShow={3}
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
                                // position: "absolute",
                                width: "100%",
                                top: "-10px",
                                opacity: 0,
                            }}
                        >
                            {i}
                        </div>
                    )}
                >
                    {/* <div className="experimentdivcontainer" style={{display:"flex",flexDirection:"row"}}> */}


                        <div class="card mb-3 bestbudgetouterdiv" >
                            <div class="row g-0 bestbudgetimagetextcontainer">
                                <div class="col-md-8 bestbudgetcardimage">
                                    <img src="https://media.istockphoto.com/photos/senju-fall-picture-id1400925699?b=1&k=20&m=1400925699&s=170667a&w=0&h=mJTG8jdAnbIeY8-vgYmPL3T15uSCn-owtXcqUi0gho4=" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-4 bestbudgettextcard">
                                    <div class="card-body bestbudgetcarddescmain">
                                        <h3 class="card-title bestbudgetcardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                        <p class="card-text bestbudgetcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                        <Button className="bestbudgetbutton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 bestbudgetouterdiv" >
                            <div class="row g-0 bestbudgetimagetextcontainer">
                                <div class="col-md-8 bestbudgetcardimage">
                                    <img src="https://media.istockphoto.com/photos/senju-fall-picture-id1400925699?b=1&k=20&m=1400925699&s=170667a&w=0&h=mJTG8jdAnbIeY8-vgYmPL3T15uSCn-owtXcqUi0gho4=" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-4 bestbudgettextcard">
                                    <div class="card-body bestbudgetcarddescmain">
                                        <h3 class="card-title bestbudgetcardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                        <p class="card-text bestbudgetcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                        <Button className="bestbudgetbutton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 bestbudgetouterdiv" >
                            <div class="row g-0 bestbudgetimagetextcontainer">
                                <div class="col-md-8 bestbudgetcardimage">
                                    <img src="https://media.istockphoto.com/photos/senju-fall-picture-id1400925699?b=1&k=20&m=1400925699&s=170667a&w=0&h=mJTG8jdAnbIeY8-vgYmPL3T15uSCn-owtXcqUi0gho4=" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-4 bestbudgettextcard">
                                    <div class="card-body bestbudgetcarddescmain">
                                        <h3 class="card-title bestbudgetcardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                        <p class="card-text bestbudgetcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                        <Button className="bestbudgetbutton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 bestbudgetouterdiv" >
                            <div class="row g-0 bestbudgetimagetextcontainer">
                                <div class="col-md-8 bestbudgetcardimage">
                                    <img src="https://media.istockphoto.com/photos/senju-fall-picture-id1400925699?b=1&k=20&m=1400925699&s=170667a&w=0&h=mJTG8jdAnbIeY8-vgYmPL3T15uSCn-owtXcqUi0gho4=" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-4 bestbudgettextcard">
                                    <div class="card-body bestbudgetcarddescmain">
                                        <h3 class="card-title bestbudgetcardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                        <p class="card-text bestbudgetcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                        <Button className="bestbudgetbutton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 bestbudgetouterdiv" >
                            <div class="row g-0 bestbudgetimagetextcontainer">
                                <div class="col-md-8 bestbudgetcardimage">
                                    <img src="https://media.istockphoto.com/photos/senju-fall-picture-id1400925699?b=1&k=20&m=1400925699&s=170667a&w=0&h=mJTG8jdAnbIeY8-vgYmPL3T15uSCn-owtXcqUi0gho4=" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-4 bestbudgettextcard">
                                    <div class="card-body bestbudgetcarddescmain">
                                        <h3 class="card-title bestbudgetcardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                        <p class="card-text bestbudgetcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                        <Button className="bestbudgetbutton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 bestbudgetouterdiv" >
                            <div class="row g-0 bestbudgetimagetextcontainer">
                                <div class="col-md-8 bestbudgetcardimage">
                                    <img src="https://media.istockphoto.com/photos/senju-fall-picture-id1400925699?b=1&k=20&m=1400925699&s=170667a&w=0&h=mJTG8jdAnbIeY8-vgYmPL3T15uSCn-owtXcqUi0gho4=" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-4 bestbudgettextcard">
                                    <div class="card-body bestbudgetcarddescmain">
                                        <h3 class="card-title bestbudgetcardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                        <p class="card-text bestbudgetcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                        <Button className="bestbudgetbutton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 bestbudgetouterdiv" >
                            <div class="row g-0 bestbudgetimagetextcontainer">
                                <div class="col-md-8 bestbudgetcardimage">
                                    <img src="https://media.istockphoto.com/photos/senju-fall-picture-id1400925699?b=1&k=20&m=1400925699&s=170667a&w=0&h=mJTG8jdAnbIeY8-vgYmPL3T15uSCn-owtXcqUi0gho4=" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-4 bestbudgettextcard">
                                    <div class="card-body bestbudgetcarddescmain">
                                        <h3 class="card-title bestbudgetcardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                        <p class="card-text bestbudgetcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                        <Button className="bestbudgetbutton" variant="primary" >Book Now</Button>
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

