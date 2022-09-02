import React from 'react';
import { Footer } from "../../Footer/Footer";

import Navbar from "../../Navbar/Navbar";
import { TitleBar } from "../../TopTitleBar/TitleBar";
import { BottomBar } from "../../BottomBar/BottomBar";
import  { MiddleForm } from "./FormBelowCaousel/Form";
import { Dropdown } from './MultipleDropdown/Dropdown';
import { HotelCards } from "./HotelCards/HotelCards";
export const Offers = () => {
  return (
    <div>
        <TitleBar />
        <Navbar />
        {/* <MiddleForm /> */}
        <Dropdown />
        <HotelCards />
        <Footer />
        <BottomBar />
    </div>
  )
}
