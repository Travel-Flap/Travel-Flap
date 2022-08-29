import Carousel from 'react-bootstrap/Carousel';
// import Navbar from "../Nav";
// import { Navbar } from "../Navbar/Navbar";
import "./Corousel.css";
import Services from "../services/Services";
// import BackgroundImage from "./TopCorouselImage.jpg";
export const ControlledCarousel = () => {
  return (
    <div className='carousel-main'>
      {/* <Navbar /> */}
      <Carousel className='my-carousel' slide={true}>
        <Carousel.Item>
          <img width={100} height={700}
            className="d-block w-100"
            src="https://i.imgur.com/JXeBLSy.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={100} height={700}
            className="d-block w-100"
            src="https://i.imgur.com/JXeBLSy.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={100} height={700}
            className="d-block w-100"
            src="https://i.imgur.com/JXeBLSy.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* <Services /> */}

    </div>

  );
}



