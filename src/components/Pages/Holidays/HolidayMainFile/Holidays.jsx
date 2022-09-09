import React from 'react';
import { Nav } from "../../../Nav/Nav";
import { Banner } from '../Banner/Banner';
import PackageDeals from '../BestSellingDestinations/Packages';
import EasyVisaDestinations from '../EasyVisaDestinations/EasyVisaDestinations';
import TrendingDestinations from '../Trending Destinations/TrendingDestinations';
import { Experiment } from './Experiment';

export const Holidays = () => {
  return (
    <div>
      {/* <Nav/> */}
      {/* <Banner /> */}
      <div className='container mt-3 carousel'>
        {/* <h1 className='holidaydeals_title'>Travel Stories</h1> */}
        <PackageDeals />
      </div>

      <EasyVisaDestinations />
        {/* <TrendingDestinations /> */}

      <div className='container mt-3 carousel'>
        {/* <h1 className='topcities_title'>Top Cities</h1> */}
        <Experiment/>
      </div>
    </div>
  )
}
