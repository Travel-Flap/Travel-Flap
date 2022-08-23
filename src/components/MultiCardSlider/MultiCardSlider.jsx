import React from "react";
import { Card, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MultiCardSlider.css";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export const MultiCardSlider = () => {
    return (
        <>
        <h2 className="mt-5 mb-5">WHAT OUR CLIENTS SAY ABOUT US</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card className="bg-dark text-white">
            <Card className="bg-dark text-white">
              <Card.Img src="https://i.imgur.com/8IRk2Wo.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                <Button variant="primary" size="lg">
                  Large button
                </Button>{' '}
              </Card.ImgOverlay>
              </Card>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="bg-dark text-white">
            <Card className="bg-dark text-white">
              <Card.Img src="https://i.imgur.com/4A6uUjY.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                <Button variant="primary" size="lg">
                  Large button
                </Button>{' '}
              </Card.ImgOverlay>
              </Card>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="bg-dark text-white">
            <Card className="bg-dark text-white">
              <Card.Img src="https://i.imgur.com/tP4zDCF.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                <Button variant="primary" size="lg">
                  Large button
                </Button>{' '}
              </Card.ImgOverlay>
              </Card>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="bg-dark text-white">
            <Card className="bg-dark text-white">
              <Card.Img src="https://i.imgur.com/8IRk2Wo.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                <Button variant="primary" size="lg">
                  Large button
                </Button>{' '}
              </Card.ImgOverlay>
              </Card>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="bg-dark text-white">
            <Card className="bg-dark text-white">
              <Card.Img src="https://i.imgur.com/8IRk2Wo.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                <Button variant="primary" size="lg">
                  Large button
                </Button>{' '}
              </Card.ImgOverlay>
              </Card>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="bg-dark text-white">
            <Card className="bg-dark text-white">
              <Card.Img src="https://i.imgur.com/tP4zDCF.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                <Button variant="primary" size="lg">
                  Large button
                </Button>{' '}
              </Card.ImgOverlay>
              </Card>
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
    );
}