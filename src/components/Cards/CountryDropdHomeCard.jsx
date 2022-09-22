import React from 'react';
import "./CountryDropHomeCard.css";

export const CountryDropHomeCard = () => {
    return (
        <>

            <div className='homecarddropcontainer'>
                <div className='homecardinnerdropdowncontiner1'>
                    <h2>We have best tour Deals</h2>
                </div>
                <div className='homecarddropdowncontainer2'>
                    <div className='optionshomecardcontainer'>
                        {/* <div className='singlehomedropcontainer'>
                            <select className="form-select countryhomecardselectdrop" aria-label="Default select example" style={{border:"3px solid #3380f2"}}>
                                <option value>Please Select Continents</option>
                                <option value="1">Asia</option>
                                <option value="2">Africa</option>
                                <option value="3">North America</option>
                                <option value="4">South America</option>
                                <option value="5">Antarctica</option>
                                <option value="6">Europe</option>
                                <option value="7">Australia</option>
                            </select>
                        </div> */}

                        <div className='singlehomedropcontainer'>
                            <select className="form-select countryhomecardselectdrop" aria-label="Default select example" style={{border:"3px solid #3380f2"}}>
                                <option value>Please Select Country</option>
                                <option value="1">India</option>
                                <option value="2">UAE</option>
                                <option value="3">Pakistan</option>
                                <option value="4">France</option>
                                <option value="5">Spain</option>
                                <option value="6">Turkey</option>
                                <option value="7">Italy</option>
                                <option value="8">Thailand</option>
                                <option value="9">Mexico</option>
                                <option value="10">Germany</option>
                                <option value="11">United Kingdom</option>
                                <option value="12">China</option>
                                <option value="13">Korea</option>
                            </select>
                        </div>

                        <div className='singlehomedropcontainer'>
                            <select className="form-select countryhomecardselectdrop" aria-label="Default select example" style={{border:"3px solid #3380f2"}}>
                                <option value>Please Select City</option>
                                <option value="1">Delhi</option>
                                <option value="2">Hyderabad</option>
                                <option value="3">Himachal Pradesh</option>
                                <option value="3">Jammu & Kashmir</option>
                                <option value="3">Punjab</option>
                                <option value="3">Mumbai</option>
                                <option value="3">Sikkim</option>
                                <option value="3">Uttrakhand</option>
                                <option value="3">Manipur</option>
                            </select>
                        </div>
                        <div className='singlehomedropcontainer'>
                            <button type="button" className="btn btn-primary homecardbutton">Search</button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
