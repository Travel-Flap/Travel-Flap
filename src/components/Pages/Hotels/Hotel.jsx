import React from 'react';
import { Nav } from "../../Nav/Nav";
import { Choose_Travelflap } from './Choose Travelflap/Choose_Travelflap';
import { Popular_Destination_In } from './Popular_destination_india/Popular_Dest_In';
import { Downloadapp } from './Download_App/Downloadapp';
import { Favourite_Hotels } from './Favourite_hotels/Favourite_hotels';
import { Hotel_Banner } from './Hotel_Banner/Hotel_Banner';
import { Free_Hotel_Lunch } from './Hotel_Free_Lunch/Free_Lunch_Hotel';
import { Footer } from '../../Footer/Footer';
import { FooterLinks } from '../../FooterLinks/FooterLinks';

export const Hotel = () => {
    return (
        <div>
            <Nav/>
            <Hotel_Banner />
            <Free_Hotel_Lunch />
            <Choose_Travelflap />
            <Popular_Destination_In />
            <Favourite_Hotels />
            <Downloadapp />
            <FooterLinks/>
            <Footer/>
        </div>
    )
}
