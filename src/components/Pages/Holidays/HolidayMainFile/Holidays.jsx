import React from 'react';
import { Nav } from "../../../Nav/Nav";
import { Banner } from '../Banner/Banner';
import PackageDeals from '../BestSellingDestinations/BestSelling';
import EasyVisaDestinations from '../EasyVisaDestinations/EasyVisaDestinations';
import TrendingDestinations from '../Trending Destinations/TrendingDestinations';
import { HolidayExperiment } from './HolidayExperiment';
import { Footer } from "../../../Footer/Footer";
import { BottomBar } from '../../../BottomBar/BottomBar';
import Newsletter from '../../../NewsLetter/NewsLetter';
import { FooterLinks } from '../../../FooterLinks/FooterLinks';
import { DomesticDestinations } from '../DomesticDestinations/DomesticDestinations';
import { InternationalDestinations } from '../InternationalDestinations/InternationalDestinations';

import { Experiment } from '../../../Experiment/Experiment';
import { Plan } from '../../../NextHolidaysPlan/Plan';

export const Holidays = () => {
  return (
    <div>
      <Nav />
      <Banner />

      <div className='mt-3 carousel'>
        <DomesticDestinations />
      </div>

      <div className='mt-3 carousel'>
        <InternationalDestinations />
      </div>

      <div className='mt-3 carousel'>
        {/* <h1 className='holidaydeals_title'>Travel Stories</h1> */}
        <PackageDeals />
      </div>

      <EasyVisaDestinations />
      {/* <TrendingDestinations /> */}

      <div className='mt-3 carousel'>
        <HolidayExperiment />
      </div>

      <Newsletter />

      <FooterLinks />

      <Experiment/>
        <Plan/>
        
      <Footer />

      <BottomBar />
    </div>
  )
}
