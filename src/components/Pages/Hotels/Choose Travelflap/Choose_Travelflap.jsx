import "./Choose_Travelflap.css"
import { MdLocalOffer, MdHome, MdOutlineDownloading,MdOutlineMessage} from 'react-icons/md';
export const Choose_Travelflap = () => {
    return (
        <>
            <div className="choose_container">
                <div id="container_chid1" >
                    <h3>Here's Why Travellers choose TravelFlap</h3>
                </div>
                <div id="container_chid2">
                    <div id="chid2_part1" className="common_chid">
                        <div className="choose_icons"><MdLocalOffer /></div>
                        <div className="choose_data">
                            <h5>Search for the best hotel deals</h5>
                            <span>Compare deals from 3M+ hotels and accommodations in one place.</span>
                        </div>
                    </div>
                    <div id="chid2_part2" className="common_chid">
                       
                        <div className="choose_icons"><MdHome /></div>
                        <div className="choose_data" >
                            <h5>Stasys For every need</h5>
                            <span>Choose your ideal stay from hotels, resotsm homestays, cotteges and other property types.</span>
                        </div>
                    </div>
                    <div id="chid2_part3" className="common_chid">
                        
                        <div className="choose_icons"><MdOutlineDownloading /></div>
                        <div className="choose_data">
                            <h5>Free cancelleation </h5>
                            <span>With easy to use filterslike free cancelleation,enjoy flexibility while booking your stay with Travelflap.</span>
                        </div>
                    </div>
                    <div id="chid2_part4" className="common_chid">
                       
                        <div className="choose_icons"> <MdOutlineMessage /></div>
                        <div className="choose_data">
                            <h5>Millions of reviews</h5>
                            <span>Check rating based on millions of real guest reviews.</span>
                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}
