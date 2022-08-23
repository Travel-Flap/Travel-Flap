import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
            {/* Column 1 */}
            <div className="col">
                {/* <img src="" alt="company logo"> */}
                    <h2>TravelFlap</h2>
                {/* </img> */}
                <p>Welcome to Our Website. We are happy to serve you as a organisation and happy to be a part
                    of your happy and joyfull journey.
                </p>
            </div>
          {/* Column2 */}
          <div className="col">
            <h5>THICC MEMES INC</h5>
            <h4 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Streeet South North</li>
            </h4>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Stuff</h4>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
          {/* Column4 */}
          <div className="col">
            <h5>WELL ANOTHER COLUMN</h5>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>

          {/* Column 5*/}
          <div className="col">
            <h4>Contact Us</h4>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import "./Footer.css";

// export const Footer = () => {
//   return(
//     <div>
//       <footer class = "footer">
// <div class = "contant">
//     <div class = "row">
//        <div class = "footer-col">
//            <h4>KFC Food</h4>
//            <ul>
//                <li><a href = "#">Menu</a></li>
//                <li><a href = "#">Order Lookup</a></li>
//                <li><a href = "#">Gift card</a></li>
               
//            </ul>
//        </div> 
//        <div class = "footer-col">
//         <h4>Support</h4>
//         <ul>
//                <li><a href = "#">Get Help</a></li>
//                <li><a href = "#">Contact Us</a></li>
//                <li><a href = "#">KFC Feedback</a></li>
               
//         </ul>
//     </div>
//     <div class = "footer-col">
//         <h4>Legal</h4>
//         <ul>
//             <li><a href = "#">Terms and Condition</a></li>
//                <li><a href = "#">Privecy policy</a></li>
//                <li><a href = "#">Disclamer</a></li>
//                <li><a href = "#">Coution Notice</a></li>
               
//         </ul>
//     </div>
//     <div class = "footer-col">
//         <h4>KFC india</h4>
//         <ul>
//             <li><a href = "#">About KFC</a></li>
//             <li><a href = "#">KFC Care</a></li>
//             <li><a href = "#">Careers</a></li>
           
//         </ul>
//     </div> 
//     <div class = "footer-col">
//         <h4>follow Us</h4>
//         <div class = "social-link">
//             <a href = "#"><i class = "fab fa-facebook-f"></i></a> 
//             <a href = "#"><i class = "fab fa-twitter"></i></a> 
//             <a href = "#"><i class = "fab fa-instagram"></i></a> 
//             <a href = "#"><i class = "fab fa-linkedin-in"></i></a> 
//         </div>
//     </div>
//     </div>

// </div> 
// </footer>
//     </div>
//   )
// }

// export default Footer;