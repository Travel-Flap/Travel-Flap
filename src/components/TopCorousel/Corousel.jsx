import Carousel from 'react-bootstrap/Carousel';
// import Navbar from "../Nav";
import "./Corousel.css";
// import BackgroundImage from "./TopCorouselImage.jpg";
export const ControlledCarousel = () => {
  return (
    <Carousel className='main-box' slide={true}>
      {/* <Navbar /> */}
      <Carousel.Item>
        <img width={900} height={700}
          className="d-block w-100"
          src="https://i.imgur.com/4KYPLdg.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={700}
          className="d-block w-100"
          src="https://i.imgur.com/eKZd0rc.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={700}
          className="d-block w-100"
          src="https://i.imgur.com/eKZd0rc.jpg"
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
  );
}



