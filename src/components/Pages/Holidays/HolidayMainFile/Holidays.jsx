import React from 'react';
import { Nav } from "../../../Nav/Nav";
import { Banner } from '../Banner/Banner';
import PackageDeals from '../BestSellingDestinations/BestSelling';
import EasyVisaDestinations from '../EasyVisaDestinations/EasyVisaDestinations';
import TrendingDestinations from '../Trending Destinations/TrendingDestinations';
import { Experiment } from './Experiment';
import { Footer } from "../../../Footer/Footer";
import { BottomBar } from '../../../BottomBar/BottomBar';
import Newsletter from '../../../NewsLetter/NewsLetter';
import { FooterLinks } from '../../../FooterLinks/FooterLinks';
import { DomesticDestinations } from '../DomesticDestinations/DomesticDestinations';
import { InternationalDestinations } from '../InternationalDestinations/InternationalDestinations';

export const Holidays = () => {
  return (
    <div>
      <Nav />
      <Banner />

      <div className='container mt-3 carousel'>
        <DomesticDestinations />
      </div>

      <div className='container mt-3 carousel'>
        <InternationalDestinations />
      </div>

      <div className='container mt-3 carousel'>
        {/* <h1 className='holidaydeals_title'>Travel Stories</h1> */}
        <PackageDeals />
      </div>

      <EasyVisaDestinations />
      {/* <TrendingDestinations /> */}

      <div className='container mt-3 carousel'>
        <Experiment />
      </div>

      <Newsletter />

      <FooterLinks />

      <Footer />

      <BottomBar />
    </div>
  )
}
