import React from 'react';
import "./ApplyProcess.css";
import one from "../one.jpeg";
import two from "../two.jpeg";
import three from "../three.jpeg";

export const ApplyProcess = () => {
    return (
        <>
          <div className='applyprocessouter'>
            <div className='applyprocessheading'>
                <p>Wanna get your Visa follow the Steps</p>
            </div>
            <div className='applyprocessstepsdiv'>
                <div className='stepone'>
                   <div className='steponeheading'>
                    <h2>1.</h2><h4>Submit Documents</h4>
                    <br/>
                    <img src={one} className="imageone"/>
                   </div>
                </div>
                <div className='steptwo'>
                   <div className='steponeheading'>
                    <h2>2.</h2><h4>Get Verified</h4>
                    <img src={two} className="imageone"/>
                   </div>
                </div>
                <div className='stepthree'>
                    <div className='steponeheading'>
                    <h2>3.</h2><h4>Get Your Visa</h4> <br/>
                    <img src={three} className="imageone"/>
                   </div>
                </div>
            </div>
          </div>
        </>
    )
}
