// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
// import { useRef } from "react";
// import { useEffect } from "react";
// import "./ExclusiveDeals.css";
// import { ButtonBase } from "@material-ui/core";

// export const Ipl = () => {
//   const sliderRef = useRef(null);
//   useEffect(() => {
//     console.log(sliderRef);
//   }, []);
//   return (
//     <div>
//       {/* <h1>Ipl</h1> */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           padding: "0 10px",
//         }}
//       >
//         <h1 style={{ fontStyle: "italic" }}>Match Highlights</h1>
//         <div style={{ display: "flex" }}>
//           <ButtonBase
//             style={{
//               width: 35,
//               height: 35,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               marginRight: 10,
//               borderRadius: 7,
//               boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
//               cursor: "pointer",
//             }}
//             className="buttons"
//             onClick={() => sliderRef.current.slickPrev()}
//           >
//             <ArrowBackIos />
//           </ButtonBase>
//           <ButtonBase
//             style={{
//               width: 35,
//               height: 35,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               borderRadius: 7,
//               boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
//               cursor: "pointer",
//             }}
//             className="buttons"
//             onClick={() => sliderRef.current.slickNext()}
//           >
//             <ArrowForwardIos />
//           </ButtonBase>
//         </div>
//       </div>
//       <div style={{ margin: 30 }}>
//         <Slider
//           // dots
//           // dotsClass="slick-dots line-indicator"
//           ref={sliderRef}
//           slidesToShow={4}
//           slidesToScroll={4}
//           // customPaging={(i) => (
//           //   <div
//           //     style={{
//           //       position: "absolute",
//           //       width: "100%",
//           //       top: "-10px",
//           //       opacity: 0,
//           //     }}
//           //   >
//           //     {i}
//           //   </div>
//           // )}
//         >
//           {Array(10)
//             .fill("")
//             .map(() => (
//               <div style={{ margin: 20 }}>
//                 <img
//                   style={{ width: 310, objectFit: "contain", borderRadius: 10 }}
//                   src="images/IPLImage.jpg"
//                   alt=""
//                 />

//               </div>
//             ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Ipl;

// export default Ipl;


// import React, { Component } from "react";
// import Slider from "react-slick";
// import { ButtonBase } from "@material-ui/core";

// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
// import { useRef } from "react";
// import { useEffect } from "react";

// export default class ExclusiveDeals extends Component {
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
//         {/* <h1 style={{ fontStyle: "italic" }}>Match Highlights</h1>
//         <div style={{ display: "flex" }}>
//           <ButtonBase
//             style={{
//               width: 35,
//               height: 35,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               marginRight: 10,
//               borderRadius: 7,
//               boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
//               cursor: "pointer",
//             }}
//             className="buttons"
//             onClick={() => sliderRef.current.slickPrev()}
//           >
//             <ArrowBackIos />
//           </ButtonBase>
//           <ButtonBase
//             style={{
//               width: 35,
//               height: 35,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               borderRadius: 7,
//               boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
//               cursor: "pointer",
//             }}
//             className="buttons"
//             onClick={() => sliderRef.current.slickNext()}
//           >
//             <ArrowForwardIos />
//           </ButtonBase>
//         </div> */}
//         <h2> Responsive </h2>
//         <Slider {...settings}>
//           <div class="card mb-3" style="max-width: 540px;">
//             <div class="row g-0">
//               <div class="col-md-4">
//                 <img src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/monsoon-special.webp" class="img-fluid rounded-start" alt="..." />
//               </div>
//               <div class="col-md-8">
//                 <div class="card-body">
//                   <h5 class="card-title">Card title</h5>
//                   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="card mb-3" style="max-width: 540px;">
//             <div class="row g-0">
//               <div class="col-md-4">
//                 <img src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/monsoon-special.webp" class="img-fluid rounded-start" alt="..." />
//               </div>
//               <div class="col-md-8">
//                 <div class="card-body">
//                   <h5 class="card-title">Experience Hotel Hills</h5>
//                   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="card mb-3" style="max-width: 540px;">
//             <div class="row g-0">
//               <div class="col-md-4">
//                 <img src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/monsoon-special.webp" class="img-fluid rounded-start" alt="..." />
//               </div>
//               <div class="col-md-8">
//                 <div class="card-body">
//                   <h5 class="card-title">Card title</h5>
//                   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="card mb-3" style="max-width: 540px;">
//             <div class="row g-0">
//               <div class="col-md-4">
//                 <img src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/monsoon-special.webp" class="img-fluid rounded-start" alt="..." />
//               </div>
//               <div class="col-md-8">
//                 <div class="card-body">
//                   <h5 class="card-title">Card title</h5>
//                   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="card mb-3" style="max-width: 540px;">
//             <div class="row g-0">
//               <div class="col-md-4">
//                 <img src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/monsoon-special.webp" class="img-fluid rounded-start" alt="..." />
//               </div>
//               <div class="col-md-8">
//                 <div class="card-body">
//                   <h5 class="card-title">Card title</h5>
//                   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="card mb-3" style="max-width: 540px;">
//             <div class="row g-0">
//               <div class="col-md-4">
//                 <img src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/monsoon-special.webp" class="img-fluid rounded-start" alt="..."/>
//               </div>
//               <div class="col-md-8">
//                 <div class="card-body">
//                   <h5 class="card-title">Card title</h5>
//                   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="card mb-3" style="max-width: 540px;">
//             <div class="row g-0">
//               <div class="col-md-4">
//                 <img src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/monsoon-special.webp" class="img-fluid rounded-start" alt="..."/>
//               </div>
//               <div class="col-md-8">
//                 <div class="card-body">
//                   <h5 class="card-title">Card title</h5>
//                   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="card mb-3" style="max-width: 540px;">
//             <div class="row g-0">
//               <div class="col-md-4">
//                 <img src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/monsoon-special.webp" class="img-fluid rounded-start" alt="..." />
//               </div>
//               <div class="col-md-8">
//                 <div class="card-body">
//                   <h5 class="card-title">Card title</h5>
//                   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }