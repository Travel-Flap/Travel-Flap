import React from "react";
import './FamousDestinations.css';
import { Component } from 'react';
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { MdLocationCity } from "react-icons/md";

export const FamousDestinations = () => {
   
   const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);

  
   
   return (
      <>
             <div className="famousdestinationsheadingcontainer" >
                <h2 className="famousdestinationsheading">Top Demanded Visas</h2>
                
                <div className='selectcountry' style={{marginTop:"-0.2%"}}>
                        
                            <select className="form-select visabannerdropdown" aria-label="Default select example" style={{border:"3px solid #3380f2",marginTop:"6%",width:"76%",fontSize:"12.5px",fontWeight:"700"}}>
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
{/* 
               <div className="bestbudgetslidercontainer"> */}
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

                  {/* <Slider  className="multiCardSlider"> */}
                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'>
                              <img src='https://cdnholidays.blueberrygroup.org/visaimages/3.png' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top " alt="..." />
                           </div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Europe</h4>
                              </div>
                              {/* <div className='awards_desc'>
                                    <p className="card-text">In more than 9 countries.</p>
                                </div> */}
                           </div>
                        </div>
                     </div>

                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://cdnholidays.blueberrygroup.org/visaimages/4.png' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Turkey</h4>
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
                           <div className='famousdestinationscard_img'><img src='https://cdnholidays.blueberrygroup.org/visaimages/5.png' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Dubai</h4>
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
                           <div className='famousdestinationscard_img'><img src='https://cdnholidays.blueberrygroup.org/visaimages/6.png' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

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
                           <div className='famousdestinationscard_img'><img src='https://cdnholidays.blueberrygroup.org/visaimages/7.png' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Maldives</h4>
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
                           <div className='famousdestinationscard_img'><img src='https://cdnholidays.blueberrygroup.org/visaimages/1.png' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Switzerland</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">In Madagascar from amadues 2018.</p>
                           </div> */}
                           </div>
                        </div>
                        {/* </div> */}
                     </div>

                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://cdnholidays.blueberrygroup.org/visaimages/7.png' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Mauritius</h4>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://cdnholidays.blueberrygroup.org/visaimages/7.png' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Srilanka</h4>
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
                           <div className='famousdestinationscard_img'><img src='https://cdnholidays.blueberrygroup.org/visaimages/2.png' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body mainfamousdestinationscardwrapper">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">UK</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">from SA Airlines in Zimbabwe(2018).</p>
                           </div> */}
                           </div>
                        </div>
                        {/* </div> */}
                     </div>

                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://cdnholidays.blueberrygroup.org/visaimages/4.png' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Italy</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">from SA Airlines in Zimbabwe(2018).</p>
                           </div> */}
                           </div>
                        </div>
                        {/* </div> */}
                     </div>
                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://cdnholidays.blueberrygroup.org/visaimages/4.png' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body mainfamousdestinationscardwrapper">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Serbia</h4>
                              </div>
               
                           </div>
                        </div>
                       
                     </div>
                  </Slider >
               </div>

      



            </div>
        
      </>
   );
}

// export default International;
