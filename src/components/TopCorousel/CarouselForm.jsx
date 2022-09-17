import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './CarouselForm.css';
import { BiCurrentLocation } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { FaAccessibleIcon, FaCalendarAlt } from 'react-icons/fa';
import { Menu } from './Menu.jsx';
import { MdFlight,MdOutlineLocalActivity } from 'react-icons/md';
import { FaPlusCircle, FaMinusCircle, FaArrowCircleDown,FaHotel,FaLaptopHouse } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import { GiPalmTree } from 'react-icons/gi';
import { GrBus } from 'react-icons/gr';
import { GiCruiser } from 'react-icons/gi';
import { BsFillMoonFill } from 'react-icons/bs';
import { CgMoreAlt } from 'react-icons/cg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const CarouselForm = () => {
    return (
        <>
            {/* <Menu /> */}
           <div className='carouselmenu'>
           
              <div className='carouselmenu-icon' id='borderLeft'>
              <MdFlight size={"1.9em"} className="carouselFormicon"/>
              <Link to="/flights" className='flighttext'> Flight </Link>
              </div>
              <div className='carouselmenu-icon'>
              <FaHotel size={"1.9em"} className="carouselFormicon"/>
              <Link to="/hotel" className='flighttext'> Hotel </Link>
              </div>
              <div className='carouselmenu-icon'>
               <RiVisaFill size={"1.9em"} className="carouselFormicon"/>
               <Link to="/visa" className='flighttext'> Visa </Link>
              </div>
              <div className='carouselmenu-icon'>
              <GiPalmTree size={"1.9em"} className="carouselFormicon"/>
              <Link to="/holidays" className='flighttext'> Holidays </Link>
              </div>
              <div className='carouselmenu-icon'>
              <FaLaptopHouse size={"1.9em"} className="carouselFormicon"/>
              <Link to="/villa" className='flighttext'> Villas </Link>
              </div>
              <div className='carouselmenu-icon'>
               <GiCruiser size={"1.9em"} className="carouselFormicon"/>
               <Link to="/cruise" className='flighttext'> Cruise </Link>
              </div>
              <div className='carouselmenu-icon'>
              <MdOutlineLocalActivity size={"1.9em"} className="carouselFormicon"/>
              <Link to="/activities" className='flighttext'> Activities </Link>
              </div>
              <div className='carouselmenu-icon' id='borderright'>
              <CgMoreAlt size={"1.9em"}/>
                More
              </div>
           </div>


            <div id='filter-travel-container'>
                <div className='chooseoptions'>
                    <input type="radio" className='chooseoptions1' />
                    <label className='radiodesc'>One Way</label>
                    <input type="radio" className='chooseoptions2' />
                    <label className='radiodesc'>Round Trip</label>
                    <input type="radio" className='chooseoptions3' />
                    <label className='radiodesc'>Multi Trip</label>
                </div>
                <div className='maindatesections'>
                    <div className='filter-fromTo'>
                        <div className='from-name'>
                            <h5>FROM</h5>
                            <input className='cityinput' type="search" placeholder="Jaipur" />
                            {/* <p>[AUH] Abu Dhabi International </p> */}
                        </div>
                        {/* <BiCurrentLocation className='location' /> */}
                        <div className='from-name2'>
                            <h5>TO </h5>
                            <input className='cityinput' type="search" placeholder="Delhi" />
                            {/* <p>[DXB] Dubai</p> */}
                        </div>
                    </div>


                    <div id='formdates'>
                        <div className='selectdate'>
                            <h5>Departure</h5>
                            <DatePicker style={{ border: "none" }} placeholderText='Departure' id='dateonewayform' />
                        </div>
                        <div id='selectReturndate1'>
                            <h5>Return</h5>
                            <DatePicker placeholderText='Return' id='dateonewayform' />
                        </div>
                    </div>
                    <div id='travel' >
                        <div id='departure'>
                            <h3>Choose Passengers <FaArrowCircleDown className='downarrowicon' /></h3>
                            <div className="dropdown-content">
                                <div className='navbarOptions'>
                                    <FaPlusCircle className='contactIcon' />   <FaMinusCircle className='decrease' /> Adults
                                </div>
                                <div className='navbarOptions '>
                                    <FaPlusCircle className='miceIcon' />   <FaMinusCircle className='decrease' /> Children
                                </div>
                                <div className='navbarOptions'>
                                    <FaPlusCircle className='offersIcon' />  <FaMinusCircle className='decrease' /> Infants
                                </div>
                            </div>
                        </div>

                        <button className='searchbtn'>Search Flight</button>

                    </div>
                </div>
                
                <div className='checkmark'>
                    <input type="checkbox" className='flightscheckbox' />
                    <label className='flightscheckbox1'>Flights You've searched for</label>
                    <input type="checkbox" className='flightscheckbox' />
                    <label className='flightscheckbox1'>Flights from Jaipur</label>
                    <input type="checkbox" className='flightscheckbox' />
                    <label className='flightscheckbox1'> Direct Flight</label>
                    <input type="checkbox" className='flightscheckbox' />
                    <label className='flightscheckbox1'> Defence fare</label>

                </div>
            </div>
        </>
    )
}
