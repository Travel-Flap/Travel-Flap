import { useState, useEffect } from 'react';
import './CarouselForm.css';
import { BiCurrentLocation } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { FaAccessibleIcon, FaCalendarAlt } from 'react-icons/fa';
import { Menu } from './Menu.jsx';
import { MdFlight } from 'react-icons/md';
import { FaPlusCircle, FaMinusCircle, FaArrowCircleDown } from 'react-icons/fa';
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
            <Menu />



            <div id='filter-travel-container'>
                <div className='chooseoptions'>
                    <input type="radio" className='chooseoptions1' />
                    <label>One Way</label>
                    <input type="radio" className='chooseoptions2' />
                    <label>Round Trip</label>
                    <input type="radio" className='chooseoptions3' />
                    <label>Multi Trip</label>
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
                            <DatePicker style={{ border: "none" }} placeholderText='Departure Date' id='dateonewayform' />
                        </div>
                        <div className='selectReturndate1'>
                            <h5>Return</h5>
                            <DatePicker placeholderText='Return Date' id='dateonewayform' />
                        </div>
                    </div>
                    <div id='travel'>
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
                    <label className='flightscheckbox1'> Direct Flight</label>
                    <input type="checkbox" className='flightscheckbox' />
                    <label className='flightscheckbox1'> Defence fare</label>


                </div>
            </div>
        </>
    )
}
