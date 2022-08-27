import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
// import img1 from "./1st.jpg";
// import {} from "./1st.jpg";

export const OwlCarousels = () => {
  return (
    <div>
        <OwlCarousel
        className="owl-theme"
        items="3"
        autoplay
        nav
        dots>
            <div className='item'>
                <img src="https://i.imgur.com/JXeBLSy.jpg"></img>
            </div>

            <div className='item'>
                <img src="https://i.imgur.com/JXeBLSy.jpg"></img>
            </div>

            <div className='item'>
                <img src="https://i.imgur.com/JXeBLSy.jpg"></img>
            </div>

        </OwlCarousel>
    </div>
  )
}
