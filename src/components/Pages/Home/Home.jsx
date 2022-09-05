import React from 'react'
import { ControlledCarousel } from "../../TopCorousel/Corousel";
import { TravelForm } from "../../FormBelowCorousel/TravelForm";
import { DataCards } from "../../Cards/Cards";
import { Middleslider } from "../../MiddleCorousel/Middleslider";
import { ContactForm } from "../../contactform/ContactForm";
import { Footer } from "../../Footer/Footer";

import Navbar from "../../Navbar/Navbar";
import { TitleBar } from "../../TopTitleBar/TitleBar";
import { CardText } from "../../CardwithText/CardText";
import { TrendingNow } from "../../TrendingNowCards/TrendingNow";
import { BottomBar } from "../../BottomBar/BottomBar";
// import { ImageSlider } from "../../MultipleCards/MultiCardSlider";

import ImageSlider from "../../MultipleCards/MultiCardSlider";
import { Awards } from "../../Achievements/Awards";
// import {OurPartners} from "../../OurPatnersSection/OurPartners";
import OurPartners from '../../OurPatnersSection/OurPartners';

import { Carousel } from "../../TopCorousel/Corousel";
// import { PopularDestinations } from '../../PopularDestinations/PopularDestinations';
import PopularDestinations from '../../PopularDestinations/PopularDestinations';

// import { Services } from '../../Services/Services';
export const Home = () => {
    return (
        <div>

            {/* <Services /> */}

            <TitleBar />
            <Navbar />

            <ControlledCarousel />
            {/* <Carousel /> */}
            <TravelForm />

            <DataCards />

            <Middleslider />

            <CardText />

            <Awards />

            {/* <div className="container mt-5 carousel">
                <h1 className="slider_title">What our Clients say about us</h1>
                <PopularDestinations />
            </div> */}

            <div className="container mt-5 carousel">
                <h1 className="slider_title">What our Clients say about us</h1>
                <ImageSlider />
            </div>
            {/*  */}
            <div className='container mt-5 carousel'>
                <h1 className='partners_title'>Our Partners</h1>
                <OurPartners />
            </div>

            <TrendingNow />

            <ContactForm />

            <Footer />

            <BottomBar />

        </div>
    )
}
