import React from 'react'
import { ControlledCarousel } from "../../TopCorousel/Corousel";
import { DataCards } from "../../Cards/Cards";
import { Middleslider } from "../../MiddleCorousel/Middleslider";
import { Footer } from "../../Footer/Footer";

// import Navbar from "../../Navbar/Navbar";
import { TitleBar } from "../../TopTitleBar/TitleBar";
import { CardText } from "../../CardwithText/CardText";
import { BottomBar } from "../../BottomBar/BottomBar";
// import { ImageSlider } from "../../MultipleCards/MultiCardSlider";

import ImageSlider from "../../MultipleCards/MultiCardSlider";

// import {OurPartners} from "../../OurPatnersSection/OurPartners";
import OurPartners from '../../OurPatnersSection/OurPartners';

// import { Carousel } from "../../TopCorousel/Corousel";
import { PopularDestinations } from '../../PopularDestinations/PopularDestinations';
// import PopularDestinations from '../../ExclusiveDeals/ExclusiveDeals';

import TravelStories from "../../TravelStories/TravelStories";
import { Newsletter } from '../../NewsLetter/NewsLetter';
import Awards from '../../Achievements/Awards';
import { Nav } from "../../Nav/Nav";
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import TopCities from '../../TopCities/TopCities';
// import ExclusiveDeals from '../../ExclusiveDeals/ExclusiveDeals';
// import { ExclusiveDeals } from '../../ExclusiveDeals/ExclusiveDeals';
export const Home = () => {
    return (
        <div>

            {/* <Experiment /> */}
            {/* <Services /> */}

            {/* <TitleBar /> */}
            {/* <Navbar /> */}
            <Nav />

            <ControlledCarousel />

            {/* <div className="container mt-5 carousel">
                <h1 className="exclusivedeals_title">Exclusive Deals</h1>
                <ExclusiveDeals/>
            </div> */}

            {/* <TravelForm /> */}

            <PopularDestinations />

            <DataCards />

            <div className='container mt-3 carousel'>
                <h1 className='partners_title'>Travel Stories</h1>
                <TravelStories />
            </div>
            {/* <Carousel /> */}

            <div className='container mt-3 carousel'>
                {/* <h1 className='topcities_title'>Top Cities</h1> */}
                <TopCities />
            </div>

            <CardText />

            <Middleslider />

            <div className="container mt-5 carousel">
                <h1 className="slider_title">Achievement and Awards</h1>
                <Awards />
            </div>

            {/* <Awards /> */}

            <div className="container mt-5 carousel">
                <h1 className="slider_title">What our Clients say about us</h1>
                <ImageSlider />
            </div>

            {/* <div className="container mt-5 carousel">
                <h1 className="slider_title">What our Clients say about us</h1>
                <PopularDestinations />
            </div> */}


            <div className='container mt-5 carousel'>
                <h1 className='partners_title'>Our Partners</h1>
                <OurPartners />
            </div>

            <Newsletter />

            <FooterLinks /> 

            {/* <TrendingNow />

            <ContactForm /> */}
            

            <Footer />

            <BottomBar />

        </div>
    )
}
