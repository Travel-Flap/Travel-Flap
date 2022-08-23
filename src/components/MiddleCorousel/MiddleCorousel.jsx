import Card from 'react-bootstrap/Card';
import { ControlledCarousel } from '../TopCorousel/Corousel';

export const MiddleCorousel = () => {
  return (
    <Card className="bg-dark text-white">
        {/* src="https://i.imgur.com/RemdYqk.png" */}
      <Card.Img className='backgroundimage' src="https://i.imgur.com/0G1gp92.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <ControlledCarousel />
      </Card.ImgOverlay>
    </Card>
  );
}

// // export default ImgOverlayExample;


// import Carousel from 'react-bootstrap/Carousel';

// export const MiddleCorousel = () => {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://i.imgur.com/RemdYqk.png"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=Second slide&bg=282c34"
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=Third slide&bg=20232a"
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default UncontrolledExample;