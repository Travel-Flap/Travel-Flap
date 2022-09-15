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
import WorldActivities from './WorldActivities/WorldActivities';
import { ActivityAround } from './ActivitiesAroundyou/ActivitiesAroundyou';


export const Activities = () => {
  return (
    <div>
      <Nav />
      <ControlledCarousel />
      <CountryDropdown />

      <div className='mt-3 carousel'>
        <ActivityAround/>
      </div>

      <div className="carousel">
        <h1 className="clientstestimonial_title">Best Activities Around the World</h1>
        <WorldActivities/>
      </div>
      
      <div className='mt-3 carousel'>
        <TopActivities />
      </div>



      <Newsletter />
      <FooterLinks />
      <Plan />
      <Experiment />
      <Footer />
    </div>
  )
}
