import React from 'react'
import { ControlledCarousel } from "../../TopCorousel/Corousel";
import { DataCards } from "../../Cards/Cards";
import { Middleslider } from "../../MiddleCorousel/Middleslider";
import { Footer } from "../../Footer/Footer";

// import Footer from '../../FooterSection/Footer';
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
import { ExclusiveDeals } from '../../ExclusiveDeals/ExclusiveDeals';
import { Experiment } from '../../Experiment/Experiment';
import { Plan } from '../../NextHolidaysPlan/Plan';
export const Home = () => {
    return (
        <div>

            {/* <Experiment /> */}
            {/* <Services /> */}

            {/* <TitleBar /> */}
            {/* <Navbar /> */}
            <Nav />

            <ControlledCarousel />
                <ExclusiveDeals />
            <div className='carousel'>
            </div>

            {/* <ExclusiveDeals /> */}
            {/* <div className="container mt-5 carousel">
                <h3 className="exclusivedeals_title">Exclusive Deals</h3>
            </div> */}

            {/* <TravelForm /> */}

            <PopularDestinations />

            <DataCards />

            {/* <Carousel /> */}

            <div className='carousel'>
                {/* <h1 className='topcities_title'>Top Cities</h1> */}
                <TopCities />
            </div>

            <CardText />

            {/* <Middleslider /> */}
            <div className='carousel'>
                <h1 className='travelstories_title'>Travel Stories</h1>
                <TravelStories />
            </div>

            <div className="carousel">
                <h1 className="achievements_title">Achievement and Awards</h1>
                <Awards />
            </div>

            {/* <Awards /> */}

            <div className="carousel">
                <h1 className="clientstestimonial_title">What our Clients say about us</h1>
                <ImageSlider />
            </div>


            {/* <div className="container mt-5 carousel">
                <h1 className="slider_title">What our Clients say about us</h1>
                <PopularDestinations />
            </div> */}


            <div className='carousel'>
                <h1 className='partners_title'>Our Partners</h1>
                <OurPartners />
            </div>

            <Newsletter />

            <FooterLinks />

            {/* <TrendingNow />

            <ContactForm /> */}

            <Experiment/>
            <Plan/>
            <Footer />

            <BottomBar />

        </div>
    )
}
