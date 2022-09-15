import React from 'react';
import { CarouselForm } from '../../../TopCorousel/CarouselForm';
import "./Banner.css";

export const Banner = () => {
    return (
        <>
            <div className='holidaybannerouterdiv'>
                <div id="carouselExampleFade" className="carousel slide carousel-fade bannercarousel" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="images/HolidayBanner/HolidaysCarouselImage3.jpg" className="holidaybannerimage d-block w-100 " alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="images/HolidayBanner/HolidaysCarouselImage4.jpg" className="holidaybannerimage d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="images/HolidayBanner/HolidaysCarouselImage1.jpg" className="holidaybannerimage d-block w-100" alt="..." />
                        </div>
                    </div>
                    
                    {/* <CarouselForm/> */}


                    {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button> */}

                    

                </div>

                {/* <div className='bannersearchdiv'>
                        <div className='bannerinnerdiv1'>
                            <p>Destination,Package,Type</p>
                            <input className='bannnerdiv1input' type="text" placeholder='Enter the place your are going?'></input>
                        </div>
                        <div className='bannerinnerdiv2'>
                            <button type="button" className="btn btn-primary btn-lg">Large button</button>
                        </div>
                    </div> */}
            </div>



            {/* </div> */}
            {/* <div class="card text-bg-dark">
                <img src="https://c4.wallpaperflare.com/wallpaper/203/203/693/sunset-drawing-animals-lake-wallpaper-preview.jpg" class="card-img" alt="..." />
                    <div class="card-img-overlay">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
            </div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="holidaycarouselimage carousel-item active">
                        <img src="https://c4.wallpaperflare.com/wallpaper/161/296/845/nature-sea-water-turquoise-wallpaper-preview.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="holidaycarouselimage carousel-item">
                        <img src="https://c4.wallpaperflare.com/wallpaper/590/262/493/christmas-winter-4k-wallpaper-preview.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="holidaycarouselimage carousel-item">
                        <img src="https://c4.wallpaperflare.com/wallpaper/203/203/693/sunset-drawing-animals-lake-wallpaper-preview.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div> */}
        </>
    )
}
