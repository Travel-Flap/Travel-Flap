import React from 'react';
import "./VisaDetails.css";
import { HotelNav } from '../../../Pages/Hotels/HotelNavbar/HotelNav';
import TopCities from '../../../TopCities/TopCities';
import Ballons from './Ballons.png';
export const VisaDetails = () => {
    return (
        <>
            <div> <HotelNav/> </div>
            {/* <div> <TopCities/> </div> */}
            {/* <div className='visadetailsbanner'>
                <img src={Ballons}/>
            </div> */}
            <div className='visadetailscontainer'>
               <div className='visamainheading'>
                   <h1>UAE Visa</h1>
               </div>
                 <div className='visadetailsmaindiv'>
                    <div className='visadetailsdata' style={{border:"2px solid black"}}>
                        <div className='Visadescription'>
                        <p className='visatypeheading'>Description</p>
                            <p className='descriptiontext'>Long stretches of the white-sand beaches, magnificent desert dunes, and the stunning skyscrapers; The United Arab Emirates is quite the beauty. With over 10 million people visiting the city of Dubai, the UAE is one of the world’s top tourist destination. To enter the country, however, you would need a UAE Visa</p>
                        </div>
                        <div className='visatype'>
                            <p className='visatypeheading'>Visa Type</p>
                        <ul>
                            <li className='visadetailslists'>Tourist</li>
                            <li className='visadetailslists'>Immigration</li>
                            <li className='visadetailslists'>Student</li>
                            <li className='visadetailslists'>Work</li>
                        </ul>
                        </div>
                        <div className='Visadescription'>
                        <p className='visatypeheading'>Processing Time</p>
                            <p className='visadetailstime'>6-7 Days</p>
                        </div>
                        <div className='Visadocuments'>
                            <p className='visatypeheading'>Required Documents</p>
                            <ul>
                                <li className='visadetailslists'>Passport</li>
                                <li className='visadetailslists'>Completed Application Form</li>
                                <li className='visadetailslists'>Valid Identity Proof</li>
                                <li className='visadetailslists'>Recent Passport Size Photograph</li>
                            </ul>
                        </div>
                        <div className='Visaduration'>
                        <p className='visatypeheading'>Duration</p>
                            <ul>
                                <li className='visadetailslists'>Six Months</li>
                                <li className='visadetailslists'>1 Week</li>
                                <li className='visadetailslists'>30 Days</li>
                            </ul>
                        </div>
                   </div>
                   <div className='visadetailsimage' style={{border:"2px solid green"}}>
                      <img width="100%" height="100%" src='https://w0.peakpx.com/wallpaper/656/394/HD-wallpaper-dubai-uae-night-skyscrapers-modern-buildings-bay-beautiful-buildings-united-arab-emirates.jpg'/>
                    </div>
                 </div>
            </div>
        </>
    )
}
