import React from 'react';
import { Nav } from "../../../Nav/Nav";
import { Banner } from '../Banner/Banner';
import PackageDeals from '../BestSellingDestinations/Packages';
import EasyVisaDestinations from '../EasyVisaDestinations/EasyVisaDestinations';
export const Holidays = () => {
  return (
    <div>
      {/* <Nav/> */}
      {/* <Banner /> */}
      <div className='container mt-3 carousel'>
        {/* <h1 className='holidaydeals_title'>Travel Stories</h1> */}
        <PackageDeals />
      </div>

      <EasyVisaDestinations/>
    </div>
  )
}
