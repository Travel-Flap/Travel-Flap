import React from "react";
import './PopularDestinations.css';
import  { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import { MdLocationCity } from "react-icons/md";

export const PopularDestinations = () => {
   const settings = {
      // dots: true,
      infinite: true,
      // autoplay: true,
      speed: 900,
      slidesToShow: 4,
      slidesToScroll: 1,
      cssEase: "linear",
      // arrows: false,
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
      <>
         <div className="main">
            <div className='head'>
               <div className='title'>
                  <div className='title1'>Popular</div>
                  <div className='title2'>Destinations</div>
               </div>
               <div className='title3'>DESTINATIONS</div>
               <div className='title3_inner1'>INTERNATIONAL</div>
               <div className='title3_inner2'>DOMESTIC</div>
               <div className='title4_viewall'>View All Destinations</div>
            </div>

            <div className='data'>
               <div className='populardestinationsnames'>
                  <div className='namesContainer'>
                     <div className='picimg'>
                        <div className='pic'>
                           <img  src='images/country images/europe 2.jpg' />
                        </div>
                        <div className='country'>Europe</div>
                     </div>
                     <div className='picimg'>
                        <div className='pic'>
                           <img src='images/country images/turkey.jpg' />
                        </div>
                        <div className='country'>Turkey</div>
                     </div>
                     <div className='picimg'>
                        <div className='pic'>
                           <img src='images/country images/dubai 3.jpg' />
                           {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsC0i3udOZCYJrxE-ga1W9-XW3BpgxLNDPPP2kA72r&s" alt="Dubai image"/> */}
                        </div>
                        <div className='country'>Dubai</div>
                     </div>
                     <div className='picimg'>
                        <div className='pic'>
                           <img src='images/country images/thailand 2.jpg' />
                        </div>
                        <div className='country'>Thailand</div>
                     </div>
                     <div className='picimg'>
                        <div className='pic'>
                        
                           <img src='images/country images/maldives 2.jpg' />
                        </div>
                        <div className='country'>Maldives</div>
                     </div>
                     <div className='picimg'>
                        <div className='pic'>
                           <img src='images/country images/switzerland 2.jpg' />
                        </div>
                        <div className='country'>Switzerland</div>
                     </div>
                     <div className='picimg'>
                        <div className='pic'>
                           <img src='images/country images/mauritius.jpg' />
                        </div>
                        <div className='country'>Mauritius</div>
                     </div>
                     <div className='picimg'>
                        <div className='pic'>
                           <img src='images/country images/srilanka 3.jpg' />
                        </div>
                        <div className='country'>Srilanka</div>
                     </div>
                     <div className='picimg'>
                        <div className='pic'>
                           <img src='images/country images/uk 2.jpg' />
                        </div>
                        <div className='country'>UK</div>
                     </div>
                     <div className='picimg'>
                        <div className='pic'>
                           <img src='images/country images/italy.jpg' />
                        </div>
                        <div className='country'>Italy</div>
                     </div>
                     <div className='picimg'>
                        <div className='pic'>
                           <img src='images/country images/serbia 1.jpg' />
                        </div>
                        <div className='country'>Serbia</div>
                     </div>
                  </div>
               </div>

               <div className='populardestinationscontainer'>
                  <Slider {...settings} className="multiCardSlider">
                     <div className="card-wrapper">
                        <div className="card populardestinationssliderdiv">
                           <div className=" populardestinationcardimage">
                              <img src="images/country images/Goa.jpg" />
                           </div>
                           <div className="populardestinationsdetails">
                              <h2>Goa <span className="job-title">"Best Holiday trip Ever"
                              </span>
                              
                              </h2>
                           </div>
                        </div>
                     </div>

                     <div className="card-wrapper">
                        <div className="card populardestinationssliderdiv">
                           <div className=" populardestinationcardimage">
                              <img src="images/country images/singapore.jpg" />
                           </div>
                           <div className="populardestinationsdetails">
                              <h2>Singapore <span className="job-title">"Best Holiday trip Ever"
                              </span>
                              </h2>
                           </div>
                        </div>
                     </div>

                     <div className="card-wrapper">
                        <div className="card populardestinationssliderdiv">
                           <div className=" populardestinationcardimage">
                              <img src="images/country images/oman 2.jpg" />
                           </div>
                           <div className="populardestinationsdetails">
                              <h2>Oman <span className="job-title">"Best Holiday trip Ever"
                                 </span>
                              </h2>
                           </div>
                        </div>
                     </div>

                     <div className="card-wrapper">
                        <div className="card populardestinationssliderdiv">
                           <div className=" populardestinationcardimage">
                              <img src="images/country images/paris.jpg " />
                           </div>
                           <div className="populardestinationsdetails">
                              <h2>Paris <span className="job-title">"Best Holiday trip Ever"
                                </span>
                              </h2>
                           </div>
                        </div>
                     </div>

                     <div className="card-wrapper">
                        <div className="card populardestinationssliderdiv">
                           <div className=" populardestinationcardimage">
                              <img src="images/country images/dubai2.jpg" />
                           </div>
                           <div className="populardestinationsdetails">
                              <h2>Dubai <span className="job-title">"Best Holiday trip Ever"
                                </span>
                              </h2>
                           </div>
                        </div>
                     </div>

                     {/* <div className="card-wrapper">
                        <div className="card populardestinationssliderdiv">
                           <div className=" populardestinationcardimage">
                              <img src="images/TopCitiesImage6.jpg" />
                           </div>
                           <div className="populardestinationsdetails">
                              <h2>Emirates <span className="job-title">"Best Holiday trip Ever"
                                 </span>
                              </h2>
                           </div>
                        </div>
                     </div> */}

                     <div className="card-wrapper">
                        <div className="card populardestinationssliderdiv">
                           <div className=" populardestinationcardimage">
                              <img src="images/PopularDestinationImages/destination10.jpg" />
                           </div>
                           <div className="populardestinationsdetails">
                              <h2>New York <span className="job-title">"Best Holiday trip Ever"
                                 </span>
                              </h2>
                           </div>
                        </div>
                     </div>

                     <div className="card-wrapper">
                        <div className="card populardestinationssliderdiv">
                           <div className=" populardestinationcardimage">
                              <img src="images/PopularDestinationImages/destination9.jpg" />
                           </div>
                           <div className="populardestinationsdetails">
                              <h2>France <span className="job-title">"Best Holiday trip Ever"
                                 </span>
                                 </h2>
                           </div>
                        </div>
                     </div>
                  </Slider>
                  {/* <div className='images'>
                     <div className='img'>
                        <img className="popularimagediv" src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/big/webp/europe11322.webp' />
                        <div className="bottom-left">Europe</div>
                     </div>
                     <div className='img'>
                        <img className="popularimagediv" src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/big/webp/Singapore.webp' />
                        <div class="bottom-left">Singapore</div>
                     </div>
                  </div>
                  <div className='images'>
                     <div className='img'>
                        <img className="popularimagediv" src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/big/webp/dubai.webp' />
                        <div className="bottom-left">Dubai</div>
                     </div>
                     <div className='img'>
                        <img className="popularimagediv" src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/big/webp/thailand1132022.webp' />
                        <div className="bottom-left">Thailand</div>
                     </div>
                  </div> */}
               </div>



            </div>
         </div>
      </>
   );
}

// export default International;
