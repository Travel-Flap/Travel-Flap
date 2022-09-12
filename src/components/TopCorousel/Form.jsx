import { useState, useEffect } from 'react';
import './Form.css';
import { BiCurrentLocation } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { FaAccessibleIcon, FaCalendarAlt } from 'react-icons/fa';
import {Menu} from './Menu.jsx';
import { MdFlight } from 'react-icons/md';
import { FaPlusCircle,FaMinusCircle,FaArrowCircleDown } from 'react-icons/fa';
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
            {/* <div className='banner'>
                <div className='banner-service'>
                    <div className='banner-radio-label'>
                        <label class="form-control">
                            <input type="radio" name="radio" />
                            One Way
                        </label>
                        <label class="form-control">
                            <input type="radio" name="radio" />
                            Round Trip
                        </label>
                        <label class="form-control">
                            <input type="radio" name="radio" />
                            Multi City
                        </label>
                    </div>
                    <div>
                        <h1>Book Flight Tickets</h1>
                    </div>
                </div>

                <div className='filter-travle-container' style={{display:"flex",flexDirection:"row"}}>
                    <div className='filter-fromTo'>
                        <div className='from-name'>
                            <label>FROM</label>
                            <input type="text"/>
                            <h6>Abu Dhabi</h6>
                            <p>[AUH] Abu Dhabi International </p>
                        </div>
                       
                        <div className='from-name2'>
                            <label>TO </label>
                            <h6>Dubai</h6>
                            <p>[DXB] Dubai</p>
                        </div>
                    </div>
                    <div className='date-from'>
                        <div className='depart'>
                            <FaCalendarAlt />
                            <label>Depart</label>
                            <IoIosArrowDown />
                            <h6>18 <span>Jul’22</span></h6>
                            <p>Monday</p>
                        </div>
                        <div className='depart'>
                            <FaCalendarAlt />
                            <label>Return</label>
                            <IoIosArrowDown />
                            <h6>18 <span>Jul’22</span></h6>
                            <p>Book a round trip to save more</p>
                        </div>
                        <div className='depart' id='travel'>
                            <label>Travellers & Class</label>
                            <h6>1 <span>Travellers</span></h6>
                            <p>Economy</p>
                            </div>
                        <button className='search-btn'>Search Flight</button>
                    </div>
                </div>
            </div>
          */}


<div className='filter-travel-container'>
                    <div className='filter-fromTo' >
                        <div className='from-name'>
                            <h5>FROM</h5>
                            <input className='cityinput' type="search" placeholder="Enter Your Desired Location"/>
                            {/* <p>[AUH] Abu Dhabi International </p> */}
                        </div>
                        {/* <BiCurrentLocation className='location' /> */}
                        <div className='from-name2'>
                            <h5>TO </h5>
                            <input className='cityinput' type="search" placeholder="Enter Your Desired Location"/>
                            {/* <p>[DXB] Dubai</p> */}
                        </div>
                    </div>
                    {/* <div className='date-from'>
                        <div className='depart' >
                            <FaCalendarAlt />
                            <label>Depart</label>
                            <IoIosArrowDown />
                            <h6>18 <span>Jul’22</span></h6>
                            <p>Monday</p>
                        </div>
                        <div className='depart'>
                            <FaCalendarAlt />
                            <label>Return</label>
                            <IoIosArrowDown />
                            <h6>18 <span>Jul’22</span></h6>
                            <p>Book a round trip to save more</p>
                        </div>
                    </div> */}

                    <div className='date-from'>
                        <div className='selectdate '>
                            <h5>Departure</h5>
                            <DatePicker placeholderText='Select Your Departure Date' className='dateoneway' />   
                        </div>
                        <div className='selectReturndate'>
                            <h5>Return</h5>
                            <DatePicker placeholderText='Select Your Return Date' className='dateoneway' />
                        </div>                 
                    </div>
                        <div  id='travel'>
                            <div className='depart'>
                            <h3>Choose Passengers <FaArrowCircleDown className='downarrowicon'/></h3>
                            </div>
                            <div class="dropdown-content">
                                <div className='navbarOptions'>
                                 <FaPlusCircle className='contactIcon' />   <FaMinusCircle  className='decrease' /> Adults
                               </div>
                               <div className='navbarOptions '>
                                 <FaPlusCircle className='miceIcon' />   <FaMinusCircle className='decrease'/> Children
                               </div>
                               <div className='navbarOptions'>
                                 <FaPlusCircle className='offersIcon' />  <FaMinusCircle className='decrease'/> Infants
                               </div>
                            </div>
                           <div>
                            <button className='search-btn'>Search Flight</button>
                           </div>
                        
                        </div>
                </div>
        </>
    )
}

// export default Form;