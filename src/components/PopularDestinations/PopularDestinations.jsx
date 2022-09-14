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
      autoplay: true,
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
               <div className='title3'>INTERNATIONAL</div>
               <div className='title3'>DOMESTIC</div>
               <div className='title4'>View All Destinations</div>
            </div>

            <div className='data'>
               <div className='populardestinationsnames'>
                  <div className='namesContainer'>
                     <div className='picimg'>
                        <div className='pic'>
                           <img  src='images/PopularDestinationImages/PopularDestinationImage1.jpg' />
                        </div>
                        <div className='country'>Europe</div>
                     </div>
                     <div className='picimg'>
                        <div className='pic'>
                           <img src='images/PopularDestinationImages/PopularDestinationImage2.jpg' />
                        </div>
                        <div className='country'>Turkey</div>
                     </div>
                     <div className='picimg'>
                        <div className='pic'>
                           <img src='images/PopularDestinationImages/PopularDestinationImageDubai.jpg' />
                           {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsC0i3udOZCYJrxE-ga1W9-XW3BpgxLNDPPP2kA72r&s" alt="Dubai image"/> */}
                        </div>
                        <div className='country'>Dubai</div>
                     </div>
                     <div className='picimg'>
                        <div className='pic'>
                           <img src='images/PopularDestinationImages/PopularDestinationImage4.jpg' />
                        </div>
                        <div className='country'>Thailand</div>
                     </div>
                     <div className='picimg'>
                        <div className='pic'>
                           <img src='images/PopularDestinationImages/PopularDestinationImage5.jpg' />
                        </div>
                        <div className='country'>Maldives</div>
                     </div>
                     <div className='picimg'>
                        <div className='pic'>
                           <img src='images/PopularDestinationImages/PopularDestinationImage6.jpg' />
                        </div>
                        <div className='country'>Switzerland</div>
                     </div>
                     <div className='picimg'>
                        <div className='pic'>
                           <img src='images/PopularDestinationImages/PopularDestinationImage7.jpg' />
                        </div>
                        <div className='country'>Mauritius</div>
                     </div>
                     <div className='picimg'>
                        <div className='pic'>
                           <img src='images/PopularDestinationImages/PopularDestinationImage8.jpg' />
                        </div>
                        <div className='country'>Srilanka</div>
                     </div>
                     <div className='picimg'>
                        <div className='pic'>
                           <img src='images/PopularDestinationImages/PopularDestinationImage9.jpg' />
                        </div>
                        <div className='country'>UK</div>
                     </div>
                     <div className='picimg'>
                        <div className='pic'>
                           <img src='images/PopularDestinationImages/PopularDestinationImage10.jpg' />
                        </div>
                        <div className='country'>Italy</div>
                     </div>
                     <div className='picimg'>
                        <div className='pic'>
                           <img src='images/PopularDestinationImages/PopularDestinationImage11.jpg' />
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
                              <img src="images/TopCitiesImage7.jpg" />
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
                              <img src="images/TopCitiesImage2.jpg" />
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
                              <img src="https://media.istockphoto.com/photos/muttrah-corniche-muscat-oman-picture-id936440920?b=1&k=20&m=936440920&s=170667a&w=0&h=rPQve6hnNUHyhgPv116KL79LugjcZRL_bk7O8JU2z4Q=" />
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
                              <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
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
                              <img src="images/PopularDestinationImages/PopularDestinationImageDubai.jpg" />
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
                              <img src="images/TopCitiesImage8.jpg" />
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
                              <img src="images/TopCitiesImage9.jpg" />
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
