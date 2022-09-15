import React from 'react';
import { Footer } from '../../Footer/Footer';
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import { Nav } from '../../Nav/Nav';
import  EasyVisaDestinations  from "../Holidays/EasyVisaDestinations/EasyVisaDestinations";
import { ApplyProcess } from './ApplyProcess/ApplyProcess';
import { FamousDestinations } from './FamousDestinations/FamousDestinations';
import { VisaBanner } from './VisaBanner/VisaBanner';
import { Experiment } from '../../Experiment/Experiment';
import { Plan } from '../../NextHolidaysPlan/Plan';

export const Visa = () => {
  return (
    <div>
      <Nav />
      <VisaBanner/>
      <ApplyProcess/>
      <EasyVisaDestinations/>
      {/* <FamousDestinations/> */}
      <Experiment/>
      <Plan/>
      {/* <Newsletter /> */}
      <FooterLinks />
      <Footer />
    </div>
  )
}
