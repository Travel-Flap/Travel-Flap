import React from 'react';
import "./VisaBanner.css";

export const VisaBanner = () => {
    return (
        <>
            <div className='bannerImage'>
                <div className='bannerheading'>
                    <p>Get Your Visa here!</p>
                </div>
                <div className='bannersearchboxdiv'>
                    <input type="text" placeholder="Search for Your Dream Destination" className='bannerinputdestination' />
                    <button className='bannersearchbutton'>Search</button>
                </div>
            </div>
        </>
    )
}
