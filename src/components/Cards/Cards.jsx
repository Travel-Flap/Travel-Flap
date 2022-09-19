import React from 'react';
// import { Card, Button } from "react-bootstrap";
// import { Link } from 'react-router-dom';
import { useState } from "react";
import './Cards.css';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IconContext } from "react-icons";

export const DataCards = () => {
    const [more, setmore] = useState(false);
    const [num, setnum] = useState();
    const [a, seta] = useState();

    const arr1 = [
        {
            servicename: "Mauritius",
            buttontext: "Tap for more",
            // icons: <BsSearch />,
            img: "https://images.unsplash.com/photo-1513415563383-4e580ed27a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hdXJpdGl1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Greece",
            img: "https://c4.wallpaperflare.com/wallpaper/144/949/164/nature-photography-landscape-road-wallpaper-preview.jpg",
            buttontext: "Tap for more",
            data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Scotland",
            img: "https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=600",
            buttontext: "Tap for more",
            data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Paris",
            img: "https://cdn.pixabay.com/photo/2019/04/11/13/59/paris-4119828__340.jpg",
            buttontext: "Tap for more",
            data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        // {
        //     servicename: "New York",
        //     img: "/images/CardImage1.jpg",
        //     buttontext:"Tap for more",
        //     data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        // },
        // {
        //     servicename: "Spain",
        //     img: "/images/CardImage1.jpg",
        //     buttontext:"Tap for more",
        //     data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        // },
        // {
        //     servicename: "America",
        //     img: "/images/CardImage1.jpg",
        //     buttontext:"Tap for more",
        //     data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        // },
        // {
        //     servicename: "Australia",
        //     img: "/images/CardImage1.jpg",
        //     buttontext:"Tap for more",
        //     data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        // },
    ]
    const toggle = (i) => {
        let b = i;
        if (b != a) {
            // console.log(i,"upper");
            // console.log(more);
            setnum(i)
            setmore(true)
        }
        if (b == a) {
            // console.log(i,"lower");
            // console.log(more);
            // // setnum(i)
            setmore(!more)
        }
        seta(i);
        // console.log(a)
        // console.log(b)
    }
    return (
        <>
            {/* Checking the Intent and the requirement of the documentation */}
            <div className='outercards'>
                <div className='cards-container '>

                    <div>
                        <div className='tourheadingdropdown'>

                            <div className='cardfilterdrop'>
                                <h5>Choose your Destination</h5>
                                <select className="form-select datadrop" aria-label="Default select example" style={{color:"#3380f2",fontWeight:"700", border: "2px solid #3380f2", width:"31%",height:"40px",marginLeft:"2%",borderRadius:"14px"}}>
                                    <option className='carddropvalue' selected>select here</option>
                                    <option className='carddropvalue' value="1">Asia</option>
                                    <option className='carddropvalue' value="2">Africa</option>
                                    <option className='carddropvalue' value="3">North America</option>
                                    <option className='carddropvalue' value="4">South America</option>
                                    <option className='carddropvalue' value="5">Antarctica</option>
                                    <option className='carddropvalue' value="6">Europe</option>
                                    <option className='carddropvalue' value="7">Australia</option>
                                </select>
                            </div>

                            <div className='cardtextheading'>
                                <h2 className='top-heading text-center'>We have the best tours</h2>
                            </div>

                        </div>
                        <p className='belowheadingtext text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
                    </div>

                    <div className="_SeoLocalservicesmaindiv">
                        {/* 
            <span className="_SeoLocalServicesheading">
                OUR SERVICES INCLUDES....
            </span> */}
                        <div className="_SeoLocalservicesslider">
                            {
                                arr1.map((items, i) => {
                                    return (
                                        <div className=" _SeoLocalServicesnames">

                                            {/* <IconContext.Provider value={{ className: more && num == i ? "_SeoLocalicons2" : "_SeoLocalicons1" }}>
                                    {items.icons}
                                </IconContext.Provider> */}
                                            <div className="_Activitiescard">
                                                <img src={items.img} />
                                                <p className={more && num == i ? "_SeoLocalName2" : "_SeolocalNamebutton"}>{items.buttontext}</p>
                                                <div className={more && num == i ? "_SeoLocalName2" : "_SeoLocalName"}>{items.servicename}</div>
                                            </div>
                                            <div className={more && num == i ? "_SeoLocalservicedata1" : "_SeoLocalservicedata"} onClick={() => toggle(i)} >{items.data}</div>
                                        </div>

                                    )
                                })
                            }
                        </div>

                    </div>

                </div>
            </div>


        </>
    );
}

// export default DataCards;