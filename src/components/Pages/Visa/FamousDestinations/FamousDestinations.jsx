import React from 'react';
import "./FamousDestinations.css";

export const FamousDestinations = () => {
    return (
        <>
        <div className='FamousDestinationsOuter'>
            <p>Visit Our Most Visited</p>
          <div className='populardestinationsnames' >
                  <div className='namesContainer' >
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
                    
                  </div>
               </div>
</div>
        </>
    )
}
