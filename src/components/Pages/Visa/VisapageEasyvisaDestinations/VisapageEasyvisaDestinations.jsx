import React from "react";
import './VisapageEasyvisaDestinations.css';
import { Component } from 'react';
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { MdLocationCity } from "react-icons/md";

export const VisapageEasyvisaDestinations = () => {
   
   const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);

 
   return (
      <>
             <div className="famousdestinationsheadingcontainer" >
                <h2 className="famousdestinationsheading">Easy Visa Destinations</h2>
                
                <div className='selectcountry' style={{marginTop:"-0.2%"}}>
                        
                            <select className="form-select visabannerdropdown" aria-label="Default select example" style={{border:"3px solid #3380f2",marginTop:"6%",width:"60%",fontSize:"12.5px",fontWeight:"700"}}>
                                <option value>Select Country</option>
                                <option value="1">India </option>
                                <option value="2">UAE </option>
                                <option value="3">Pakistan </option>
                                <option value="4">France </option>
                                <option value="5">Spain </option>
                                <option value="6">Turkey </option>
                                <option value="7">Italy </option>
                                <option value="8">Thailand </option>
                                <option value="9">Mexico </option>
                                <option value="10">Germany </option>
                                <option value="11">United Kingdom </option>
                                <option value="12">China </option>
                                <option value="13">Korea </option>
                            </select>
                        </div>

                <div className="famousdestinationssliderbuttons" >
                    
                    <div className="famousdestinationsbuttons">
                        <div style={{ display: "flex" }}>
                            <FaAngleLeft size={"2.5em"}
                            onClick={() => sliderRef.current.slickPrev()}
                            />
                            
                            <FaAngleRight size={"2.5em"}
                               onClick={() => sliderRef.current.slickNext()}
                           />
                        </div>
                    </div>

                </div>
            </div>
            <div className='data'>
            {/* <div className="famousdestinationsheading">Top Demanded Visas</div> */}
               <div className="famousdestinationscardmaindiv">
                  {/* <Slider {...settings1} className="multiCardSlider"> */}

                  <Slider
                    arrows={false}
                      autoplay={true}
                    speed={1000}
                    autoplaySpeed={2000}
                    // dots
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
                  
                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'>
                              <img src='https://i.pinimg.com/originals/3e/15/08/3e1508cf516efc91e77e21d0c5a85dc3.jpg' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top " alt="..." />
                           </div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title">Singapore</h4>
                              </div>
                              {/* <div className='awards_desc'>
                                    <p className="card-text">In more than 9 countries.</p>
                                </div> */}
                           </div>
                        </div>
                     </div>

                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Turkey-1.jpg' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title">Turkey</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">In more than 3 countries.</p>
                           </div> */}
                           </div>
                        </div>
                     </div>

                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://assets.vogue.in/photos/6156bbac94a9fe6fd2c1da6a/2:3/w_2560%2Cc_limit/soneva%2520Jani%2520dining.png' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Maldives</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">In Kinshasa,RDC.</p>
                           </div> */}
                           </div>
                        </div>
                        {/* </div> */}
                     </div>

                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://i.pinimg.com/originals/02/4d/23/024d236a33cc782b3ecac1e323f603e3.jpg' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Thailand</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">In Bangui Car.</p>
                           </div> */}
                           </div>
                        </div>
                        {/* </div> */}
                     </div>

                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://i.pinimg.com/originals/5e/fc/12/5efc12a61241907479339c1566be58ff.jpg' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Mauritius</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">From Rwanda Arilines in 2017.</p>
                           </div> */}
                           </div>
                        </div>
                        {/* </div> */}
                     </div>

                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://www.holidify.com/images/bgImages/SIGIRIYA.jpg' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Srilanka</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">In Madagascar from amadues 2018.</p>
                           </div> */}
                           </div>
                        </div>
                        {/* </div> */}
                     </div>

                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://www.planetware.com/wpimages/2019/10/malaysia-top-attractions-petronas-twin-towers.jpg' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Malaysia</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">As Most Sympathetic Agency 2018.</p>
                           </div> */}
                           </div>
                        </div>

                        {/* </div> */}
                     </div>

                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='http://www.traveltourxp.com/wp-content/uploads/2016/07/Likoma-Island.jpg' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Malawi</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">from SA Airlines in Namibia(2017).</p>
                           </div> */}
                           </div>
                        </div>
                        {/* </div> */}
                     </div>

                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://www.goatsontheroad.com/wp-content/uploads/2019/09/Chichen-Itza-Cancun-.jpg' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body mainfamousdestinationscardwrapper">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Mexico</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">from SA Airlines in Zimbabwe(2018).</p>
                           </div> */}
                           </div>
                        </div>
                        {/* </div> */}
                     </div>

                     
                  </Slider >
               </div>

      



            </div>
        
      </>
   );
}

// export default International;
