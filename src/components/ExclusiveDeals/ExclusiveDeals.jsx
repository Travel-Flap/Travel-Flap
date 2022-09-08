import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef } from "react";
import { useEffect } from "react";
import "./ExclusiveDeals.css";
import { ButtonBase } from "@material-ui/core";
import { Button } from "react-bootstrap"

export const ExclusiveDeals = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);
  return (
    <div>
      {/* <h1>Ipl</h1> */}
      <div className="exclusivedealsheadingcontainer" >
        <h2 className="exclusivedealsheading1">Exclusive Deals</h2>
        <div className="exclusivedealsheading2">
          <div className="exclusivedealsheading" >Hot Deals</div>
          <div>Flights</div>
          <div>Hotels</div>
          <div>Holidays</div>
          <div>Cruise</div>
          {/* </div> */}
        </div>

        <div className="viewallbuttons" >
          <p className="viewalltext">view all deals</p>
          <div className="exclusivedealdsheadingbuttons">
            <div style={{ display: "flex" }}>

              <ButtonBase
                style={{
                  width: 35,
                  height: 35,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 10,
                  borderRadius: 7,
                  boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                  cursor: "pointer",

                }}
                className="buttons button1"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <ArrowBackIos />
              </ButtonBase>
              <ButtonBase
                style={{
                  width: 35,
                  height: 35,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 7,
                  boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                  cursor: "pointer",
                }}
                className="buttons"
                onClick={() => sliderRef.current.slickNext()}
              >
                <ArrowForwardIos />
              </ButtonBase>
            </div>
          </div>

        </div>
      </div>

      <div style={{ margin: 30, width: "75%", margin: "auto" }}>
        <Slider
          arrows={false}
          // autoplay={true}
          // dots
          dotsclassName="slick-dots line-indicator"
          ref={sliderRef}
          slidesToShow={3}
          slidesToScroll={2}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]}
          customPaging={(i) => (
            <div
              style={{
                // position: "absolute",
                width: "100%",
                top: "-10px",
                opacity: 0,
              }}
            >
              {i}
            </div>
          )}
        >




          <div className="exclusivedealsouterdiv card mb-3">
            <div className="row g-0 exclusivedealsimagetextcontainer" style={{border:"2px solid black"}}>
              <div className="exclusivedealsimagediv col-md-4">
                <img className="exclusivedealsimage img-fluid rounded-start " src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/Alula-2.webp" alt="..." />
              </div>
              <div className="col-md-8 exclusivetextcard">
                <div className="card-body">
                  <h3 className=" card-title exclusivecardtitle">Save Flat Rs. 450 on flights</h3>
                  <p className="card-text">Get  Flat Rs 200* off on flights + pay through PayPal wallet and get flat Rs 250* PayPal Cashback.</p>
                  <Button className="booknowbutton" variant="primary" >Book Now</Button>
                  {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" style="max-width: 540px;">
          <div className="row g-0 exclusivedealsimagetextcontainer" >
              <div className="exclusivedealsimagediv col-md-4">
                <img className="exclusivedealsimage img-fluid rounded-start " src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/Alula-2.webp" alt="..." />
              </div>
              <div className="col-md-7 exclusivetextcard">
                <div className="card-body">
                  <h3 className=" card-title exclusivecardtitle">Save Flat Rs. 450 on flights</h3>
                  <p className="card-text">Get  Flat Rs 200* off on flights + pay through PayPal wallet and get flat Rs 250* PayPal Cashback.</p>
                  <Button className="booknowbutton" variant="primary" >Book Now</Button>
                  {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
              </div>
            </div>  
          </div>
          <div className="card mb-3" style="max-width: 540px;">
          <div className="row g-0 exclusivedealsimagetextcontainer" >
              <div className="exclusivedealsimagediv col-md-4">
                <img className="exclusivedealsimage img-fluid rounded-start " src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/Alula-2.webp" alt="..." />
              </div>
              <div className="col-md-7 exclusivetextcard">
                <div className="card-body">
                  <h3 className=" card-title exclusivecardtitle">Save Flat Rs. 450 on flights</h3>
                  <p className="card-text">Get  Flat Rs 200* off on flights + pay through PayPal wallet and get flat Rs 250* PayPal Cashback.</p>
                  <Button className="booknowbutton" variant="primary" >Book Now</Button>
                  {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" style="max-width: 540px;">
          <div className="row g-0 exclusivedealsimagetextcontainer" >
              <div className="exclusivedealsimagediv col-md-4" >
                <img className="exclusivedealsimage img-fluid rounded-start " src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/Alula-2.webp" alt="..." />
              </div>
              <div className="col-md-7 exclusivetextcard">
                <div className="card-body">
                  <h3 className=" card-title exclusivecardtitle">Save Flat Rs. 450 on flights</h3>
                  <p className="card-text">Get  Flat Rs 200* off on flights + pay through PayPal wallet and get flat Rs 250* PayPal Cashback.</p>
                  <Button className="booknowbutton" variant="primary" >Book Now</Button>
                  {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" style="max-width: 540px;">
          <div className="row g-0 exclusivedealsimagetextcontainer" >
              <div className="exclusivedealsimagediv col-md-4">
                <img className="exclusivedealsimage img-fluid rounded-start " src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/Alula-2.webp" alt="..." />
              </div>
              <div className="col-md-7 exclusivetextcard">
                <div className="card-body">
                  <h3 className=" card-title exclusivecardtitle">Save Flat Rs. 450 on flights</h3>
                  <p className="card-text">Get  Flat Rs 200* off on flights + pay through PayPal wallet and get flat Rs 250* PayPal Cashback.</p>
                  <Button className="booknowbutton" variant="primary" >Book Now</Button>
                  {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
              </div>
            </div>
          </div>


        </Slider>
      </div>
    </div>
  );
};

// export default Ipl;

// export default Ipl;


// import React, { Component } from "react";
// import Slider from "react-slick";
// import { ButtonBase } from "@material-ui/core";

// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
// import { useRef } from "react";
// import { useEffect } from "react";

// export default className ExclusiveDeals extends Component {
//   render() {
//     var settings = {
//       // dots: true,
//       infinite: false,
//       speed: 1000,
//       slidesToShow: 3,
//       slidesToScroll: 3,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     };
//     return (
//       <div>
//         <div>
//           <h2> Responsive </h2>
//         </div>

//         <Slider {...settings}>
//           <div className="card mb-3" style="max-width: 540px;">
//             <div className="row g-0">
//               <div className="col-md-4">
//                 <img src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/monsoon-special.webp" className="img-fluid rounded-start" alt="..." />
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <h3 className="card-title">Card title</h3>
//                   <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="card mb-3" style="max-width: 540px;">
//             <div className="row g-0">
//               <div className="col-md-4">
//                 <img src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/monsoon-special.webp" className="img-fluid rounded-start" alt="..." />
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <h3 className="card-title">Experience Hotel Hills</h3>
//                   <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="card mb-3" style="max-width: 540px;">
//             <div className="row g-0">
//               <div className="col-md-4">
//                 <img src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/monsoon-special.webp" className="img-fluid rounded-start" alt="..." />
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <h3 className="card-title">Card title</h3>
//                   <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="card mb-3" style="max-width: 540px;">
//             <div className="row g-0">
//               <div className="col-md-4">
//                 <img src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/monsoon-special.webp" className="img-fluid rounded-start" alt="..." />
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <h3 className="card-title">Card title</h3>
//                   <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="card mb-3" style="max-width: 540px;">
//             <div className="row g-0">
//               <div className="col-md-4">
//                 <img src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/monsoon-special.webp" className="img-fluid rounded-start" alt="..." />
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <h3 className="card-title">Card title</h3>
//                   <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="card mb-3" style="max-width: 540px;">
//             <div className="row g-0">
//               <div className="col-md-4">
//                 <img src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/monsoon-special.webp" className="img-fluid rounded-start" alt="..." />
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <h3 className="card-title">Card title</h3>
//                   <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="card mb-3" style="max-width: 540px;">
//             <div className="row g-0">
//               <div className="col-md-4">
//                 <img src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/monsoon-special.webp" className="img-fluid rounded-start" alt="..." />
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <h3 className="card-title">Card title</h3>
//                   <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="card mb-3" style="max-width: 540px;">
//             <div className="row g-0">
//               <div className="col-md-4">
//                 <img src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/monsoon-special.webp" className="img-fluid rounded-start" alt="..." />
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <h3 className="card-title">Card title</h3>
//                   <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }