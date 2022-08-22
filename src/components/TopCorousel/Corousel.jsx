import Carousel from 'react-bootstrap/Carousel';
import "./Corousel.css";
export const ControlledCarousel = () => {
  return (
    <Carousel className='main-box' slide={false}>
      <Carousel.Item>
        <img width={900} height={500}
          className="d-block w-100"
          src="https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.comC/O https://placeholder.com/"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500}
          className="d-block w-100"
          src="https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.comC/O https://placeholder.com/"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500}
          className="d-block w-100"
          src="https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.comC/O https://placeholder.com/"
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



