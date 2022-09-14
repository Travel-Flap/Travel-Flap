import React from 'react';
import { Footer } from '../../Footer/Footer';
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import { Nav } from '../../Nav/Nav';
import Newsletter from '../../NewsLetter/NewsLetter';
import { Plan } from '../../NextHolidaysPlan/Plan';
import { ControlledCarousel } from '../../TopCorousel/Corousel';
import { Experiment } from '../../Experiment/Experiment';
import { CountryDropdown } from './CountryDropDown/CountryDropdown';
// import { TopActivities } from "./WorldActivities/WorldActivities";
import TopActivities from "./TopCityActivity/TopActivity";

export const Activities = () => {
  return (
    <div>
      <Nav />
      <ControlledCarousel />
      <CountryDropdown />

      {/* <div className='container mt-3 carousel'>
        <h1 className="topcityActivity_title">Top Activitites in the Citites</h1>
        <TopActivities />
      </div> */}

      <Newsletter />
      <FooterLinks />
      <Plan />
      <Experiment />
      <Footer />
    </div>
  )
}
