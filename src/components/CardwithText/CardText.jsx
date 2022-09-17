import React from "react";
import "./CardText.css";
import { Button } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

export const CardText = () => {
    return (
        <>
            <div className='hotelroomheadingdropdown'>

                <div className='hotelroomfilterdrop'>
                    <h5>Choose your Destination</h5>
                    <select className="form-select hotelroomdrop" aria-label="Default select example" style={{ color: "#3380f2", fontWeight: "500", border: "3px solid #3380f2", width: "30%", height: "40px", marginLeft: "2%", borderRadius: "12px" }}>
                        <option className='hotelroomdropvalue' selected>select here</option>
                        <option className='hotelroomdropvalue' value="1">Luxury</option>
                        <option className='hotelroomdropvalue' value="2">Economy</option>
                        <option className='hotelroomdropvalue' value="3">Cheap</option>
                        <option className='hotelroomdropvalue' value="4">King Size Room</option>
                        <option className='hotelroomdropvalue' value="5">Honeymoon Suite</option>
                        {/* <option className='hotelroomdropvalue' value="6">Europe</option>
                        <option className='hotelroomdropvalue' value="7">Australia</option> */}
                    </select>
                </div>

                <div className='cardtextheading'>
                    <h2 className='top-heading text-center'>Best Offers with Hotel Rooms</h2>
                </div>

            </div>
            <div className="card_container">
                {/* <div className="heading-container">
                    <h4>The Best Offers With Room</h4>
                </div> */}
                <div className="cardtext-cards">
                    <div className="main_container">
                        <div className="row row-cols-1 row-cols-md-2 ">
                            <div className="col card-column">
                                <div className="card border-0">
                                    <div className="row row mb-5 textcards_main">
                                        <div className="col-md-6 image_container">
                                            <Button className="image_button" >Grand Castle</Button>
                                            <img src="images/BestHotelRooms/rooms.jpg" className="img-fluid rounded-start card_image" alt="card" />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-body cards_body ">
                                                <h3 className="card-title">$70</h3>
                                                <div className="ratings">
                                                    <IconContext.Provider value={{ className: "ratings" }}>
                                                        <AiFillStar color="#ffeb8d" />
                                                        <AiFillStar color="#fed46b" />
                                                        <AiFillStar color="#fbb53d" />
                                                        <AiFillStar color="#fa9e1b" />
                                                        <AiOutlineStar color="#fa9e30" />
                                                    </IconContext.Provider>
                                                </div>
                                                {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                                <p className="card-text"><small className="text-muted cards_desc">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</small></p>
                                                <div className="card-text card-images">
                                                    <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                                    <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                                    <img src="https://preview.colorlib.com/theme/travelix/images/bicycle.png.webp" alt="minicard images" />
                                                    <img src="https://preview.colorlib.com/theme/travelix/images/sailboat.png.webp" alt="minicard images" />
                                                </div>
                                                <p className="button"><a className="card_button" href="#">Read More...</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* row mb-5 textcards_main */}
                            <div className="col border-0 card-column">
                                <div className="card border-0">
                                    <div className="row  textcards_main">
                                        <div className="col-md-6 image_container">
                                            <Button className="image_button" >Turkey Hills</Button>
                                            <img src="images/BestHotelRooms/room2.jpg" className="img-fluid rounded-start card_image" alt="card" />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-body cards_body ">
                                                <h3 className="card-title">$50</h3>
                                                <div className="ratings">
                                                    <IconContext.Provider value={{ className: "ratings" }}>
                                                        <AiFillStar color="#ffeb8d" />
                                                        <AiFillStar color="#fed46b" />
                                                        <AiFillStar color="#fbb53d" />
                                                        <AiFillStar color="#fa9e1b" />
                                                        <AiOutlineStar color="#fa9e30" />
                                                    </IconContext.Provider>
                                                </div>
                                                {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                                <p className="card-text"><small className="text-muted">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</small></p>
                                                <div className="card-text card-images">
                                                    <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                                    <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                                    <img src="https://preview.colorlib.com/theme/travelix/images/bicycle.png.webp" alt="minicard images" />
                                                    <img src="https://preview.colorlib.com/theme/travelix/images/sailboat.png.webp" alt="minicard images" />
                                                </div>
                                                <p className="button"><a className="card_button" href="#">Read More...</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col">
                    <div className="card ">
                        <div className="row ">
                            <div className="col-md-6 border-0">
                                <img src="https://i.imgur.com/8IRk2Wo.jpg" className="img-fluid rounded-start card_image" alt="card"/>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body cards_body">
                                    <h3 className="card-title">$50</h3>
                                    <p className="card-text"><small className="text-muted">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</small></p>
                                    <div className="card-text card-images">
                                        <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images"/>
                                        <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                        <img src="https://preview.colorlib.com/theme/travelix/images/bicycle.png.webp" alt="minicard images" />
                                        <img src="https://preview.colorlib.com/theme/travelix/images/sailboat.png.webp" alt="minicard images" />
                                    </div>
                                    <p className="button"><a className="card_button" href="#">Read More...</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                            <div className="col card-column">
                                <div className="card border-0">
                                    <div className="row textcards_main">
                                        <div className="col-md-6 image_container">
                                            <Button className="image_button" >Island Dream</Button>
                                            <img src="images/BestHotelRooms/room3.jpg" className="img-fluid rounded-start card_image" alt="card" />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-body cards_body">
                                                <h3 className="card-title">$90</h3>
                                                <div className="ratings">
                                                    <IconContext.Provider value={{ className: "ratings" }}>
                                                        <AiFillStar color="#ffeb8d" />
                                                        <AiFillStar color="#fed46b" />
                                                        <AiFillStar color="#fbb53d" />
                                                        <AiFillStar color="#fa9e1b" />
                                                        <AiOutlineStar color="#fa9e30" />
                                                    </IconContext.Provider>
                                                </div>
                                                <p className="card-text"><small className="text-muted">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</small></p>
                                                <div className="card-text card-images">
                                                    <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                                    <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                                    <img src="https://preview.colorlib.com/theme/travelix/images/bicycle.png.webp" alt="minicard images" />
                                                    <img src="https://preview.colorlib.com/theme/travelix/images/sailboat.png.webp" alt="minicard images" />
                                                </div>
                                                <p className="button"><a className="card_button" href="#">Read More...</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col card-column">
                                <div className="card border-0">
                                    <div className="row textcards_main">
                                        <div className="col-md-6 image_container">
                                            <Button className="image_button" >Travel Light</Button>
                                            <img src="images/BestHotelRooms/room5.jpg" className="img-fluid rounded-start card_image" alt="card" />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-body cards_body">
                                                <h3 className="card-title">$30</h3>
                                                <div className="ratings">
                                                    <IconContext.Provider value={{ className: "ratings" }}>
                                                        <AiFillStar color="#ffeb8d" />
                                                        <AiFillStar color="#fed46b" />
                                                        <AiFillStar color="#fbb53d" />
                                                        <AiFillStar color="#fa9e1b" />
                                                        <AiOutlineStar color="#fa9e30" />
                                                    </IconContext.Provider>
                                                </div>
                                                <p className="card-text"><small className="text-muted">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</small></p>
                                                <div className="card-text card-images">
                                                    <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                                    <img src="https://preview.colorlib.com/theme/travelix/images/compass.png.webp" alt="minicard images" />
                                                    <img src="https://preview.colorlib.com/theme/travelix/images/bicycle.png.webp" alt="minicard images" />
                                                    <img src="https://preview.colorlib.com/theme/travelix/images/sailboat.png.webp" alt="minicard images" />
                                                </div>
                                                <p className="button"><a className="card_button" href="#">Read More...</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

