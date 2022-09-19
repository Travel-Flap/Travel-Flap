import React from "react";
import "./CardText.css";
import { Button } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { BsFillChatLeftFill, BsFillStarFill, BsStarHalf } from "react-icons/bs";
export const CardText = () => {
    return (
        <>
            <div className='hotelroomheadingdropdown'>

                <div className='hotelroomfilterdrop'>
                    <h5>Choose your Destination</h5>
                    <select className="form-select hotelroomdrop" aria-label="Default select example" style={{ color: "#3380f2", fontWeight: "700", border: "2px solid #3380f2", width: "30%", height: "38px", marginLeft: "2%", borderRadius: "12px" }}>
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
                {/* <div className="heading-container">
                    <h4>The Best Offers With Room</h4>
                </div> */}
                <div className="home_hotelmaincard">
                <div className="hotelmaincardouter">
                    <div className="tripcard_maindiv">
                        <div className="review">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div>
                        <img src="https://www.kayak.co.in/rimg/kimg/fd/91/0b066e48084831ec.jpg?xhint=486&yhint=300" alt="" />
                        <div className="card_title"> Pullman Phuket Panwa Beach Resorts(SHA Plus+)Panwa Cape
                            <br />
                            <span className="hoteltitle_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">41% DISCOUNT</span>
                            <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span>
                        </div>
                    </div>
                    <div className=" tripcard_maindiv">
                        <div className="review">
                            <th>Excellent
                                <br />
                                <span style={{ fontSize: "10px" }}>198 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">8.0</span>
                        </div>
                        <img src="https://www.kayak.co.in/rimg/himg/a1/bb/9f/expediav2-681434-414e81-091812.jpg?xhint=500&yhint=385" alt="" />
                        <div className="card_title">Novotel Phuket City Phokeethra(SHA Extra Plus)
                            <br />
                            <span className="hoteltitle_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">48% DISCOUNT</span>
                            <span className="hotelPricebeforediscount">&#x24;8,258</span>
                            <span className="hotel_Priceafterdiscount">&#x24;4,280</span>
                        </div>
                    </div>
                    <div className=" tripcard_maindiv">
                        <div className="review">
                            <th>Excellent
                                <br />
                                <span style={{ fontSize: "10px" }}>1573 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">8.5</span>
                        </div>
                        <img src="https://www.kayak.co.in/rimg/himg/54/c0/56/leonardo-2104836-20_Premium_Panorama_Room_O-373903.jpg?xhint=1620&yhint=1000" alt="" />
                        <div className="card_title"> Pullman Phuket Panwa Beach Resorts(SHA Plus+)Panwa Cape
                            <br />
                            <span className="hoteltitle_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">85% DISCOUNT</span>
                            <span className="hotelPricebeforediscount">&#x24;15,528</span>
                            <span className="hotel_Priceafterdiscount">&#x24;7,832</span>
                        </div>
                    </div>
                    <div className=" tripcard_maindiv">
                        <div className="review">
                            <th>Excellent
                                <br />
                                <span style={{ fontSize: "10px" }}>1411 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">8.9</span>
                        </div>
                        <img src="https://pix8.agoda.net/hotelImages/89341/-1/ee2dde7b03f89e48a4f88eef95ef194d.jpg?ca=9&ce=1" alt="" />
                        <div className="card_title">Pullman Phuket Arcadia Naithon Beach Resort(SHA Plus+) Naithon
                            <br />
                            <span className="hoteltitle_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">63% DISCOUNT</span>
                            <span className="hotelPricebeforediscount">&#x24;26,063</span>
                            <span className="hotel_Priceafterdiscount">&#x24;9,562</span>
                        </div>
                    </div>
                    <div className=" tripcard_maindiv">
                        <div className="review">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>531 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.1</span>
                        </div>
                        <img src="https://www.kayak.co.in/rimg/kimg/7e/b6/431c1748-6065ec08-0.jpeg?xhint=810&yhint=500" alt="" />
                        <div className="card_title">Anantara Layan Phuket Resort (SHA Extra Plus)
                            Layan
                            <br />
                            <span className="hoteltitle_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">76% DISCOUNT</span>
                            <span className="hotelPricebeforediscount">&#x24;93,747</span>
                            <span className="hotel_Priceafterdiscount">&#x24;22,841</span>
                        </div>
                    </div>


                </div>

            </div>
            {/* <div className="card_container">
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
            </div> */}
        </>

    )
}

