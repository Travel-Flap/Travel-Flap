import React from 'react';
import { Footer } from "../../Footer/Footer";

import Navbar from "../../Navbar/Navbar";
import { TitleBar } from "../../TopTitleBar/TitleBar";
import { BottomBar } from "../../BottomBar/BottomBar";
import  { MiddleForm } from "./FormBelowCaousel/Form";
import { MultiDropdown } from './MultipleDropdown/Dropdown';
import { HotelCards } from "./HotelCards/HotelCards";
import { Banner } from './Banner/Banner';

export const Offers = () => {
  return (
    <div>
        <TitleBar />
        <Navbar />
 
        <Banner />

        <MiddleForm />
        <MultiDropdown />
        <HotelCards />
        <Footer />
        <BottomBar />
    </div>
  )
}